console.log('🚀 Outset (Real Data Version) starting...');

// Activity type mappings
const ACTIVITY_CATEGORIES = {
    hiking: { icon: '🥾', label: 'Hiking & Trails', keywords: ['trail', 'hiking', 'path', 'nature', 'mountain'] },
    parks: { icon: '🌳', label: 'Parks & Nature', keywords: ['park', 'nature', 'forest', 'garden', 'reserve'] },
    biking: { icon: '🚴', label: 'Biking & Cycling', keywords: ['bike', 'cycle', 'cycling'] },
    water: { icon: '🛶', label: 'Water Activities', keywords: ['lake', 'river', 'beach', 'water', 'kayak', 'marina'] },
    climbing: { icon: '🧗', label: 'Climbing', keywords: ['climbing', 'boulder'] },
    skiing: { icon: '⛷️', label: 'Winter Sports', keywords: ['ski', 'snow', 'winter'] },
    sports: { icon: '⚽', label: 'Sports & Recreation', keywords: ['sport', 'recreation', 'fitness', 'stadium'] },
    camping: { icon: '⛺', label: 'Camping', keywords: ['camp', 'campsite', 'campground'] }
};

// State
let userLocation = null;
let foundActivities = [];
let mySchedule = JSON.parse(localStorage.getItem('outset_schedule') || '[]');

// Calculate distance between two coordinates (in miles)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Get user location
async function getUserLocation() {
    console.log('📍 Getting user location...');
    updateProgress(10, 'Getting your location...');

    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                console.log('✅ Got coordinates:', userLocation.lat, userLocation.lng);
                updateProgress(30, 'Location found! Searching for activities...');

                // Get city name
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLocation.lat}&lon=${userLocation.lng}`,
                        { headers: { 'User-Agent': 'Outset-App' } }
                    );
                    const data = await response.json();
                    const city = data.address.city || data.address.town || data.address.county || '';
                    const state = data.address.state || '';
                    userLocation.name = city && state ? `${city}, ${state}` : 'Your Location';
                    console.log('✅ Location name:', userLocation.name);
                } catch (err) {
                    console.log('Could not get city name');
                    userLocation.name = 'Your Location';
                }

                resolve(userLocation);
            },
            (error) => {
                console.error('❌ Geolocation error:', error);
                reject(error);
            }
        );
    });
}

// Fetch outdoor activities from OpenStreetMap
async function fetchRealActivities(lat, lng, radiusMiles = 10) {
    console.log(`🔍 Searching for outdoor activities within ${radiusMiles} miles...`);
    updateProgress(40, 'Searching OpenStreetMap database...');

    const radiusMeters = radiusMiles * 1609.34; // Convert miles to meters

    // Overpass API query for outdoor locations
    const query = `
        [out:json][timeout:25];
        (
          // Parks and nature areas
          node["leisure"="park"](around:${radiusMeters},${lat},${lng});
          way["leisure"="park"](around:${radiusMeters},${lat},${lng});
          node["leisure"="nature_reserve"](around:${radiusMeters},${lat},${lng});
          way["leisure"="nature_reserve"](around:${radiusMeters},${lat},${lng});

          // Trails and paths
          way["highway"="path"](around:${radiusMeters},${lat},${lng});
          way["highway"="footway"]["name"](around:${radiusMeters},${lat},${lng});
          relation["route"="hiking"](around:${radiusMeters},${lat},${lng});

          // Natural features
          node["natural"="peak"](around:${radiusMeters},${lat},${lng});
          node["natural"="beach"](around:${radiusMeters},${lat},${lng});
          way["natural"="beach"](around:${radiusMeters},${lat},${lng});
          way["natural"="water"]["name"](around:${radiusMeters},${lat},${lng});

          // Sports facilities
          node["leisure"="sports_centre"](around:${radiusMeters},${lat},${lng});
          node["leisure"="pitch"]["sport"](around:${radiusMeters},${lat},${lng});
          node["sport"="climbing"](around:${radiusMeters},${lat},${lng});
          node["sport"="skiing"](around:${radiusMeters},${lat},${lng});

          // Water activities
          node["leisure"="marina"](around:${radiusMeters},${lat},${lng});
          node["amenity"="boat_rental"](around:${radiusMeters},${lat},${lng});

          // Camping
          node["tourism"="camp_site"](around:${radiusMeters},${lat},${lng});

          // Viewpoints and attractions
          node["tourism"="viewpoint"](around:${radiusMeters},${lat},${lng});
        );
        out center;
    `;

    try {
        const response = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            body: query
        });

        if (!response.ok) {
            throw new Error(`Overpass API error: ${response.status}`);
        }

        updateProgress(70, 'Processing results...');
        const data = await response.json();
        console.log(`✅ Found ${data.elements.length} locations from OpenStreetMap`);

        // Process and categorize results
        const activities = processOverpassResults(data.elements, lat, lng);
        console.log(`✅ Processed into ${activities.length} activities`);

        updateProgress(90, 'Organizing activities...');
        return activities;

    } catch (error) {
        console.error('❌ Error fetching from OpenStreetMap:', error);
        throw error;
    }
}

// Process Overpass API results
function processOverpassResults(elements, userLat, userLng) {
    const activities = [];
    const seen = new Set();

    elements.forEach(element => {
        // Get coordinates
        let lat, lng;
        if (element.lat && element.lon) {
            lat = element.lat;
            lng = element.lon;
        } else if (element.center) {
            lat = element.center.lat;
            lng = element.center.lon;
        } else {
            return; // Skip if no coordinates
        }

        // Get name
        const name = element.tags?.name || element.tags?.ref || 'Unnamed Location';

        // Skip duplicates
        const key = `${name}-${lat.toFixed(4)}-${lng.toFixed(4)}`;
        if (seen.has(key)) return;
        seen.add(key);

        // Calculate distance
        const distance = calculateDistance(userLat, userLng, lat, lng);
        if (distance > 15) return; // Skip if too far

        // Determine category
        const category = categorizeLocation(element.tags);
        if (!category) return;

        // Create description
        const description = generateDescription(element.tags, category);

        activities.push({
            id: `osm-${element.id}`,
            name: name,
            category: category,
            lat: lat,
            lng: lng,
            distance: distance.toFixed(1),
            description: description,
            tags: element.tags,
            source: 'OpenStreetMap'
        });
    });

    // Sort by distance
    activities.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

    return activities;
}

// Categorize location based on tags
function categorizeLocation(tags) {
    const tagString = JSON.stringify(tags).toLowerCase();

    if (tags.route === 'hiking' || tags.highway === 'path' || tags.highway === 'footway' || tags.natural === 'peak') {
        return 'hiking';
    }
    if (tags.leisure === 'park' || tags.leisure === 'nature_reserve' || tags.leisure === 'garden') {
        return 'parks';
    }
    if (tags.sport === 'cycling' || tagString.includes('bike') || tagString.includes('cycle')) {
        return 'biking';
    }
    if (tags.natural === 'beach' || tags.natural === 'water' || tags.leisure === 'marina' || tags.amenity === 'boat_rental') {
        return 'water';
    }
    if (tags.sport === 'climbing' || tagString.includes('climbing')) {
        return 'climbing';
    }
    if (tags.sport === 'skiing' || tagString.includes('ski')) {
        return 'skiing';
    }
    if (tags.tourism === 'camp_site' || tagString.includes('camp')) {
        return 'camping';
    }
    if (tags.leisure === 'sports_centre' || tags.leisure === 'pitch' || tags.sport) {
        return 'sports';
    }

    // Default to parks for any outdoor location
    if (tags.leisure || tags.natural || tags.tourism === 'viewpoint') {
        return 'parks';
    }

    return null;
}

// Generate description based on tags
function generateDescription(tags, category) {
    const descriptions = {
        hiking: 'Outdoor trail perfect for hiking and nature walks',
        parks: 'Natural outdoor space for recreation and relaxation',
        biking: 'Great for biking and cycling activities',
        water: 'Water-based recreation and activities',
        climbing: 'Climbing facility or natural climbing area',
        skiing: 'Winter sports and skiing location',
        camping: 'Camping and overnight outdoor experiences',
        sports: 'Sports and recreational activities'
    };

    let desc = descriptions[category] || 'Outdoor recreation area';

    // Add specific details from tags
    if (tags.description) {
        desc = tags.description;
    } else if (tags.natural) {
        desc = `Natural ${tags.natural} area`;
    } else if (tags.sport) {
        desc = `${tags.sport} facility`;
    }

    return desc;
}

// Generate time slots
function generateTimeSlots() {
    const slots = [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ['7:00 AM', '9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

    const today = new Date();

    for (let i = 1; i <= 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayName = days[date.getDay()];
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const time = times[Math.floor(Math.random() * times.length)];

        slots.push({
            day: dayName,
            date: dateStr,
            time: time
        });
    }

    return slots;
}

// Update progress bar
function updateProgress(percent, message) {
    const bar = document.getElementById('progress-bar');
    const status = document.getElementById('loading-status');
    if (bar) bar.style.width = percent + '%';
    if (status) status.textContent = message;
}

// Show page
function showPage(pageId) {
    console.log('📄 Navigating to:', pageId);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
}

// Display activities grouped by category
function displayActivities(activities) {
    console.log('📊 Displaying activities...');

    const container = document.getElementById('activities-container');
    const locationInfo = document.getElementById('location-info');
    const resultsCount = document.getElementById('results-count');

    if (!container) {
        console.error('❌ Container not found');
        return;
    }

    locationInfo.textContent = `📍 ${userLocation.name}`;
    resultsCount.textContent = `Found ${activities.length} real outdoor locations near you`;

    // Group by category
    const grouped = {};
    activities.forEach(activity => {
        if (!grouped[activity.category]) {
            grouped[activity.category] = [];
        }
        grouped[activity.category].push(activity);
    });

    let html = '';

    Object.keys(grouped).forEach(category => {
        const categoryData = ACTIVITY_CATEGORIES[category];
        if (!categoryData) return;

        const items = grouped[category];

        html += `
            <div style="margin-bottom: 3rem;">
                <h2 style="font-size: 1.75rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 2rem;">${categoryData.icon}</span>
                    ${categoryData.label}
                    <span style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">${items.length}</span>
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
        `;

        items.forEach(activity => {
            const timeSlots = generateTimeSlots();

            html += `
                <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.2s;">
                    <div style="background: linear-gradient(135deg, #10b981, #3b82f6); height: 120px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                        ${categoryData.icon}
                    </div>
                    <div style="padding: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                            <h3 style="font-size: 1.1rem; margin: 0; flex: 1;">${activity.name}</h3>
                            <span style="background: #f3f4f6; color: #10b981; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; margin-left: 0.5rem;">
                                ${activity.distance} mi
                            </span>
                        </div>

                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0.5rem 0;">${activity.description}</p>

                        <div style="margin-top: 0.5rem; padding: 0.5rem; background: #f9fafb; border-radius: 8px; font-size: 0.75rem; color: #6b7280;">
                            📊 Data from ${activity.source}
                        </div>

                        <div style="border-top: 1px solid #e5e7eb; padding-top: 1rem; margin-top: 1rem;">
                            <p style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Plan your visit:</p>
                            ${timeSlots.map((slot, idx) => `
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: #f9fafb; border-radius: 8px; margin-bottom: 0.5rem;">
                                    <div style="font-size: 0.8rem;">
                                        <div style="font-weight: 600;">${slot.day}, ${slot.date}</div>
                                        <div style="color: #6b7280;">${slot.time}</div>
                                    </div>
                                    <button
                                        onclick="addToSchedule('${activity.id}', '${activity.name.replace(/'/g, "\\'")}', '${category}', '${slot.day}', '${slot.date}', '${slot.time}', '${activity.distance}')"
                                        style="background: #10b981; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.75rem;">
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
                <div style="font-size: 4rem;">🔍</div>
                <h2>No outdoor activities found nearby</h2>
                <p style="color: #6b7280;">Try increasing your search radius or check back later.</p>
            </div>
        `;
    }

    container.innerHTML = html;
    console.log('✅ Activities displayed');
}

// Add to schedule
window.addToSchedule = function(activityId, name, category, day, date, time, distance) {
    console.log('📅 Adding to schedule:', name);

    const categoryData = ACTIVITY_CATEGORIES[category];

    mySchedule.push({
        activityId,
        name,
        category,
        icon: categoryData.icon,
        day,
        date,
        time,
        distance,
        addedAt: new Date().toISOString()
    });

    localStorage.setItem('outset_schedule', JSON.stringify(mySchedule));
    alert(`✅ "${name}" added to your schedule!\n${day}, ${date} at ${time}`);
};

// Remove from schedule
window.removeFromSchedule = function(index) {
    if (confirm('Remove this activity from your schedule?')) {
        mySchedule.splice(index, 1);
        localStorage.setItem('outset_schedule', JSON.stringify(mySchedule));
        showSchedule();
    }
};

// Show schedule
function showSchedule() {
    const container = document.getElementById('schedule-container');
    const empty = document.getElementById('empty-schedule');

    if (mySchedule.length === 0) {
        container.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    const sorted = [...mySchedule].sort((a, b) => new Date(a.date) - new Date(b.date));

    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';

    sorted.forEach((item, idx) => {
        html += `
            <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center;">
                <div style="font-size: 3rem;">${item.icon}</div>
                <div>
                    <h3 style="font-size: 1.5rem; margin: 0 0 0.5rem 0;">${item.name}</h3>
                    <div style="color: #6b7280; font-size: 1rem;">
                        <p style="margin: 0.25rem 0;"><strong>📅 ${item.day}, ${item.date}</strong></p>
                        <p style="margin: 0.25rem 0;">🕐 ${item.time}</p>
                        <p style="margin: 0.25rem 0;">📍 ${item.distance} miles away</p>
                    </div>
                </div>
                <button
                    onclick="removeFromSchedule(${idx})"
                    style="background: #ef4444; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    Remove
                </button>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Main flow
async function findActivities() {
    try {
        console.log('🎯 Starting activity search...');
        showPage('loading-page');

        // Get user location
        await getUserLocation();

        // Fetch real activities
        foundActivities = await fetchRealActivities(userLocation.lat, userLocation.lng, 10);

        updateProgress(100, 'Complete!');

        // Show results
        setTimeout(() => {
            showPage('activities-page');
            displayActivities(foundActivities);
        }, 500);

    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ Could not find activities. Please make sure:\n\n1. You allowed location access\n2. You have an internet connection\n3. Try again in a moment');
        showPage('landing-page');
    }
}

// Initialize
function init() {
    console.log('🎯 Initializing app...');

    const findBtn = document.getElementById('find-activities');
    if (findBtn) {
        findBtn.addEventListener('click', findActivities);
        console.log('✅ Button listener attached');
    }

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

    const backBtn = document.getElementById('back-to-activities');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showPage('activities-page');
        });
    }

    console.log('✅ App ready! Click "Find Real Activities Near Me" to start');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
