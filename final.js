console.log('🚀 Outset - Manual Location Entry Version');

// Activity categories
const CATEGORIES = {
    hiking: { icon: '🥾', label: 'Hiking & Trails' },
    parks: { icon: '🌳', label: 'Parks & Nature' },
    water: { icon: '🛶', label: 'Water Activities' },
    biking: { icon: '🚴', label: 'Biking & Cycling' },
    climbing: { icon: '🧗', label: 'Climbing' },
    skiing: { icon: '⛷️', label: 'Winter Sports' },
    camping: { icon: '⛺', label: 'Camping' },
    sports: { icon: '⚽', label: 'Sports & Recreation' },
    viewpoints: { icon: '🏔️', label: 'Scenic Viewpoints' }
};

// State
let userLocation = null;
let activities = [];
let schedule = JSON.parse(localStorage.getItem('outset_schedule') || '[]');

// Calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
}

// Update progress
function updateProgress(percent, message) {
    const bar = document.getElementById('progress-bar');
    const status = document.getElementById('loading-status');
    if (bar) bar.style.width = percent + '%';
    if (status) status.textContent = message;
}

// Show page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Geocode city and state to coordinates
async function geocodeLocation(city, state) {
    console.log(`🔍 Geocoding: ${city}, ${state}`);
    updateProgress(20, `Finding ${city}, ${state}...`);

    try {
        const query = `${city}, ${state}, USA`;
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`,
            { headers: { 'User-Agent': 'Outset-App' } }
        );

        const data = await response.json();

        if (!data || data.length === 0) {
            throw new Error('Location not found');
        }

        const result = data[0];
        userLocation = {
            lat: parseFloat(result.lat),
            lng: parseFloat(result.lon),
            city: city,
            state: state,
            name: `${city}, ${state}`
        };

        console.log('✅ Geocoded to:', userLocation);
        return userLocation;

    } catch (error) {
        console.error('❌ Geocoding error:', error);
        throw new Error(`Could not find "${city}, ${state}". Please check spelling and try again.`);
    }
}

// Search for outdoor activities
async function searchActivities(lat, lng, radiusMiles = 15) {
    console.log(`🔍 Searching within ${radiusMiles} miles...`);
    updateProgress(40, 'Searching OpenStreetMap for outdoor activities...');

    const radiusMeters = radiusMiles * 1609.34;

    const query = `
        [out:json][timeout:30];
        (
          node["leisure"="park"](around:${radiusMeters},${lat},${lng});
          way["leisure"="park"](around:${radiusMeters},${lat},${lng});
          node["leisure"="nature_reserve"](around:${radiusMeters},${lat},${lng});
          way["leisure"="nature_reserve"](around:${radiusMeters},${lat},${lng});
          node["natural"="peak"](around:${radiusMeters},${lat},${lng});
          node["natural"="beach"](around:${radiusMeters},${lat},${lng});
          way["natural"="beach"](around:${radiusMeters},${lat},${lng});
          way["natural"="water"]["name"](around:${radiusMeters},${lat},${lng});
          way["highway"="path"]["name"](around:${radiusMeters},${lat},${lng});
          way["highway"="footway"]["name"](around:${radiusMeters},${lat},${lng});
          node["tourism"="viewpoint"](around:${radiusMeters},${lat},${lng});
          node["leisure"="sports_centre"](around:${radiusMeters},${lat},${lng});
          node["sport"="climbing"](around:${radiusMeters},${lat},${lng});
          node["amenity"="bicycle_rental"](around:${radiusMeters},${lat},${lng});
          node["tourism"="camp_site"](around:${radiusMeters},${lat},${lng});
          node["leisure"="marina"](around:${radiusMeters},${lat},${lng});
        );
        out center 100;
    `;

    try {
        const response = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            body: query
        });

        if (!response.ok) {
            throw new Error('OpenStreetMap search failed');
        }

        updateProgress(70, 'Processing results...');
        const data = await response.json();

        console.log(`✅ Found ${data.elements.length} locations`);

        const processed = processResults(data.elements, lat, lng);
        console.log(`✅ Processed ${processed.length} activities`);

        return processed;

    } catch (error) {
        console.error('❌ Search error:', error);
        throw error;
    }
}

// Process OpenStreetMap results
function processResults(elements, userLat, userLng) {
    const results = [];
    const seen = new Set();

    elements.forEach(el => {
        // Get coordinates
        let lat, lng;
        if (el.lat && el.lon) {
            lat = el.lat;
            lng = el.lon;
        } else if (el.center) {
            lat = el.center.lat;
            lng = el.center.lon;
        } else {
            return;
        }

        // Get name
        const name = el.tags?.name || el.tags?.ref;
        if (!name) return;

        // Avoid duplicates
        const key = `${name}-${lat.toFixed(3)}`;
        if (seen.has(key)) return;
        seen.add(key);

        // Calculate distance
        const distance = calculateDistance(userLat, userLng, lat, lng);
        if (parseFloat(distance) > 20) return;

        // Categorize
        const category = categorize(el.tags);
        if (!category) return;

        // Generate description
        const desc = describe(el.tags, category);

        results.push({
            id: `osm-${el.id}`,
            name: name,
            category: category,
            lat: lat,
            lng: lng,
            distance: distance,
            description: desc,
            tags: el.tags
        });
    });

    // Sort by distance
    results.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

    return results;
}

// Categorize location
function categorize(tags) {
    const str = JSON.stringify(tags).toLowerCase();

    if (tags.highway === 'path' || tags.highway === 'footway' || tags.natural === 'peak') {
        return 'hiking';
    }
    if (tags.leisure === 'park' || tags.leisure === 'nature_reserve') {
        return 'parks';
    }
    if (tags.natural === 'beach' || tags.natural === 'water' || tags.leisure === 'marina') {
        return 'water';
    }
    if (str.includes('bike') || str.includes('cycle')) {
        return 'biking';
    }
    if (str.includes('climb')) {
        return 'climbing';
    }
    if (str.includes('ski')) {
        return 'skiing';
    }
    if (tags.tourism === 'camp_site') {
        return 'camping';
    }
    if (tags.tourism === 'viewpoint') {
        return 'viewpoints';
    }
    if (tags.leisure === 'sports_centre' || tags.sport) {
        return 'sports';
    }

    return 'parks';
}

// Generate description
function describe(tags, category) {
    const descriptions = {
        hiking: 'Trail for hiking and nature walks',
        parks: 'Park and outdoor recreation area',
        water: 'Water recreation and activities',
        biking: 'Biking and cycling location',
        climbing: 'Climbing facility or area',
        skiing: 'Winter sports location',
        camping: 'Camping and overnight stays',
        sports: 'Sports and recreation facility',
        viewpoints: 'Scenic viewpoint and overlook'
    };

    if (tags.description) return tags.description;
    if (tags.natural) return `Natural ${tags.natural} area`;
    return descriptions[category] || 'Outdoor recreation area';
}

// Generate time slots
function generateTimeSlots() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ['7:00 AM', '9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'];
    const slots = [];
    const today = new Date();

    for (let i = 1; i <= 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const day = days[date.getDay()];
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const time = times[Math.floor(Math.random() * times.length)];

        slots.push({ day, date: dateStr, time });
    }

    return slots;
}

// Display activities
function displayActivities() {
    console.log('📊 Displaying activities...');

    const container = document.getElementById('activities-container');
    const locationInfo = document.getElementById('location-info');
    const resultsCount = document.getElementById('results-count');

    locationInfo.textContent = `📍 ${userLocation.name}`;
    resultsCount.textContent = `Found ${activities.length} outdoor locations`;

    // Group by category
    const grouped = {};
    activities.forEach(act => {
        if (!grouped[act.category]) grouped[act.category] = [];
        grouped[act.category].push(act);
    });

    let html = '';

    Object.keys(grouped).forEach(cat => {
        const catData = CATEGORIES[cat];
        if (!catData) return;

        const items = grouped[cat];

        html += `
            <div style="margin-bottom: 3rem;">
                <h2 style="font-size: 1.75rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 2rem;">${catData.icon}</span>
                    ${catData.label}
                    <span style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">${items.length}</span>
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
        `;

        items.forEach(act => {
            const slots = generateTimeSlots();

            html += `
                <div style="background: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #10b981, #3b82f6); height: 120px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                        ${catData.icon}
                    </div>
                    <div style="padding: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                            <h3 style="font-size: 1.1rem; margin: 0; flex: 1;">${act.name}</h3>
                            <span style="background: #f3f4f6; color: #10b981; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; margin-left: 0.5rem;">
                                ${act.distance} mi
                            </span>
                        </div>
                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0.5rem 0;">${act.description}</p>

                        <div style="margin: 1rem 0; padding: 0.5rem; background: #f0fdf4; border-left: 3px solid #10b981; border-radius: 4px; font-size: 0.75rem; color: #065f46;">
                            ✓ Real location from OpenStreetMap
                        </div>

                        <div style="border-top: 1px solid #e5e7eb; padding-top: 1rem; margin-top: 1rem;">
                            <p style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Available times:</p>
                            ${slots.map((slot, idx) => `
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: #f9fafb; border-radius: 8px; margin-bottom: 0.5rem;">
                                    <div style="font-size: 0.8rem;">
                                        <div style="font-weight: 600;">${slot.day}, ${slot.date}</div>
                                        <div style="color: #6b7280;">${slot.time}</div>
                                    </div>
                                    <button
                                        onclick="addToSchedule('${act.id}', '${escapeQuotes(act.name)}', '${cat}', '${slot.day}', '${slot.date}', '${slot.time}', '${act.distance}')"
                                        style="background: #10b981; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.75rem; transition: background 0.2s;">
                                        Add
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    if (html === '') {
        html = `
            <div style="text-align: center; padding: 4rem;">
                <div style="font-size: 4rem;">🏔️</div>
                <h2>No activities found</h2>
                <p style="color: #6b7280;">Try searching in a different city or check back later.</p>
                <button onclick="showPage('landing-page')" class="cta-button" style="margin-top: 1rem;">
                    Try Different Location
                </button>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Escape quotes for HTML attributes
function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Add to schedule
window.addToSchedule = function(id, name, category, day, date, time, distance) {
    console.log('📅 Adding:', name);

    const catData = CATEGORIES[category];

    schedule.push({
        id, name, category,
        icon: catData.icon,
        day, date, time, distance,
        location: userLocation.name,
        addedAt: new Date().toISOString()
    });

    localStorage.setItem('outset_schedule', JSON.stringify(schedule));
    alert(`✅ Added to schedule!\n\n${name}\n${day}, ${date} at ${time}`);
};

// Remove from schedule
window.removeFromSchedule = function(idx) {
    if (confirm('Remove this activity?')) {
        schedule.splice(idx, 1);
        localStorage.setItem('outset_schedule', JSON.stringify(schedule));
        showSchedule();
    }
};

// Show schedule
function showSchedule() {
    const container = document.getElementById('schedule-container');
    const empty = document.getElementById('empty-schedule');

    if (schedule.length === 0) {
        container.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    const sorted = [...schedule].sort((a, b) => new Date(a.date) - new Date(b.date));

    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';

    sorted.forEach((item, idx) => {
        html += `
            <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center;">
                <div style="font-size: 3rem;">${item.icon}</div>
                <div>
                    <h3 style="font-size: 1.5rem; margin: 0 0 0.5rem 0;">${item.name}</h3>
                    <div style="color: #6b7280; font-size: 1rem;">
                        <p style="margin: 0.25rem 0;"><strong>📅 ${item.day}, ${item.date}</strong></p>
                        <p style="margin: 0.25rem 0;">🕐 ${item.time}</p>
                        <p style="margin: 0.25rem 0;">📍 ${item.distance} miles from ${item.location}</p>
                    </div>
                </div>
                <button
                    onclick="removeFromSchedule(${idx})"
                    style="background: #ef4444; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.2s;">
                    Remove
                </button>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Main search function
async function searchForActivities() {
    const city = document.getElementById('city-input').value.trim();
    const state = document.getElementById('state-input').value;

    if (!city || !state) {
        alert('Please enter both city and state');
        return;
    }

    try {
        console.log(`🔍 Searching for: ${city}, ${state}`);

        showPage('loading-page');
        updateProgress(10, 'Starting search...');

        // Geocode location
        await geocodeLocation(city, state);

        // Search for activities
        activities = await searchActivities(userLocation.lat, userLocation.lng);

        updateProgress(100, 'Complete!');

        // Show results
        setTimeout(() => {
            showPage('activities-page');
            displayActivities();
        }, 500);

    } catch (error) {
        console.error('❌ Error:', error);
        alert(`Error: ${error.message}\n\nPlease try again.`);
        showPage('landing-page');
    }
}

// Initialize
function init() {
    console.log('✅ App ready');

    // Search button
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchForActivities);
    }

    // Enter key on inputs
    const cityInput = document.getElementById('city-input');
    const stateInput = document.getElementById('state-input');

    [cityInput, stateInput].forEach(input => {
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') searchForActivities();
            });
        }
    });

    // Navigation
    const scheduleNav = document.getElementById('nav-schedule');
    if (scheduleNav) {
        scheduleNav.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('schedule-page');
            showSchedule();
        });
    }

    const activitiesNav = document.getElementById('nav-activities');
    if (activitiesNav) {
        activitiesNav.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('activities-page');
        });
    }

    const changeLocation = document.getElementById('change-location');
    if (changeLocation) {
        changeLocation.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('landing-page');
        });
    }

    const backBtn = document.getElementById('back-to-activities');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showPage('activities-page');
        });
    }

    console.log('👉 Enter your city and state to begin!');
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
