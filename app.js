console.log('Outset - Unique Outdoor Experiences');

// Activity categories with outdoor AND indoor activities and image URLs
const ACTIVITY_TYPES = {
    // Outdoor activities
    parasailing: { label: 'Parasailing', search: ['parasail', 'paragliding'], image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', indoor: false },
    scuba: { label: 'Scuba Diving', search: ['scuba', 'dive', 'diving'], image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', indoor: false },
    snorkeling: { label: 'Snorkeling', search: ['snorkel'], image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', indoor: false },
    kayaking: { label: 'Kayaking', search: ['kayak', 'canoe'], image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800', indoor: false },
    surfing: { label: 'Surfing', search: ['surf', 'beach'], image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800', indoor: false },
    skiing: { label: 'Skiing', search: ['ski', 'alpine'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', indoor: false },
    snowboarding: { label: 'Snowboarding', search: ['snowboard'], image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800', indoor: false },
    iceclimbing: { label: 'Ice Climbing', search: ['ice climb'], image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800', indoor: false },
    rockclimbing: { label: 'Rock Climbing', search: ['climb', 'boulder'], image: 'https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=800', indoor: false },
    canyoneering: { label: 'Canyoneering', search: ['canyon'], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', indoor: false },
    caving: { label: 'Caving', search: ['cave', 'spelunk'], image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800', indoor: false },
    ziplining: { label: 'Ziplining', search: ['zipline', 'zip'], image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800', indoor: false },
    hanggliding: { label: 'Hang Gliding', search: ['hang glid', 'gliding'], image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800', indoor: false },
    paragliding: { label: 'Paragliding', search: ['paraglid'], image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800', indoor: false },
    skydiving: { label: 'Skydiving', search: ['skydiv', 'parachut'], image: 'https://images.unsplash.com/photo-1512843690691-c3c8fcac2e0e?w=800', indoor: false },
    ballooning: { label: 'Hot Air Ballooning', search: ['balloon'], image: 'https://images.unsplash.com/photo-1498550744921-75f79806b163?w=800', indoor: false },
    mountainbiking: { label: 'Mountain Biking', search: ['mountain bike', 'mtb'], image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800', indoor: false },
    roadcycling: { label: 'Road Cycling', search: ['cycle', 'bike'], image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800', indoor: false },
    trailrunning: { label: 'Trail Running', search: ['trail run'], image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800', indoor: false },
    rafting: { label: 'Whitewater Rafting', search: ['raft', 'whitewater'], image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800', indoor: false },
    standup: { label: 'Stand-Up Paddleboarding', search: ['sup', 'paddleboard'], image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800', indoor: false },
    windsurfing: { label: 'Windsurfing', search: ['windsurf'], image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800', indoor: false },
    kitesurfing: { label: 'Kitesurfing', search: ['kitesurf', 'kiteboard'], image: 'https://images.unsplash.com/photo-1520443240718-fce21cc5070a?w=800', indoor: false },
    sailing: { label: 'Sailing', search: ['sail', 'yacht'], image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800', indoor: false },
    fishing: { label: 'Fishing', search: ['fish'], image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=800', indoor: false },
    horseback: { label: 'Horseback Riding', search: ['horse', 'equestrian'], image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800', indoor: false },
    camping: { label: 'Camping', search: ['camp'], image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800', indoor: false },
    backpacking: { label: 'Backpacking', search: ['backpack', 'trek'], image: 'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?w=800', indoor: false },
    wildlife: { label: 'Wildlife Watching', search: ['wildlife', 'safari'], image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800', indoor: false },
    birdwatching: { label: 'Birdwatching', search: ['bird'], image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800', indoor: false },
    photography: { label: 'Outdoor Photography', search: ['photo'], image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800', indoor: false },
    stargazing: { label: 'Stargazing', search: ['star', 'astronomy'], image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', indoor: false },
    geocaching: { label: 'Geocaching', search: ['geocache'], image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800', indoor: false },
    orienteering: { label: 'Orienteering', search: ['orienteer'], image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800', indoor: false },
    hiking: { label: 'Hiking', search: ['hike', 'trail', 'path'], image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800', indoor: false },
    parks: { label: 'Parks & Nature', search: ['park', 'nature', 'reserve'], image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', indoor: false },

    // Indoor activities for bad weather
    indoorclimbing: { label: 'Indoor Climbing', search: ['climbing', 'boulder'], image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800', indoor: true },
    indoorpool: { label: 'Indoor Swimming', search: ['pool', 'swim'], image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800', indoor: true },
    bowling: { label: 'Bowling', search: ['bowl'], image: 'https://images.unsplash.com/photo-1632842138794-e1bbeb1c732e?w=800', indoor: true },
    iceskating: { label: 'Ice Skating', search: ['ice', 'skate'], image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800', indoor: true },
    trampoline: { label: 'Trampoline Park', search: ['trampoline'], image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800', indoor: true },
    yoga: { label: 'Yoga Studio', search: ['yoga'], image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800', indoor: true },
    fitness: { label: 'Fitness Center', search: ['gym', 'fitness'], image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', indoor: true },
    martialarts: { label: 'Martial Arts', search: ['martial', 'karate', 'judo', 'taekwondo'], image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800', indoor: true },
    dance: { label: 'Dance Studio', search: ['dance'], image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800', indoor: true },
    gymnastics: { label: 'Gymnastics', search: ['gymnastic'], image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800', indoor: true },
    squash: { label: 'Squash', search: ['squash'], image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800', indoor: true },
    badminton: { label: 'Badminton', search: ['badminton'], image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800', indoor: true },
    tabletennis: { label: 'Table Tennis', search: ['table tennis', 'ping pong'], image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800', indoor: true },
    basketball: { label: 'Indoor Basketball', search: ['basketball'], image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800', indoor: true },
    volleyball: { label: 'Indoor Volleyball', search: ['volleyball'], image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800', indoor: true },
    racquetball: { label: 'Racquetball', search: ['racquetball'], image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800', indoor: true },
    lasertag: { label: 'Laser Tag', search: ['laser'], image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800', indoor: true },
    indoorsoccer: { label: 'Indoor Soccer', search: ['soccer', 'futsal'], image: 'https://images.unsplash.com/photo-1489944440615-453fc2b8ead8?w=800', indoor: true }
};

// State
let userLocation = null;
let allActivities = [];
let filteredActivities = [];
let schedule = JSON.parse(localStorage.getItem('outset_schedule') || '[]');
let activeFilters = {
    types: new Set(),
    durations: new Set(),
    difficulties: new Set(),
    costs: new Set()
};

// Utility functions
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

function updateProgress(percent, message) {
    const bar = document.getElementById('progress-bar');
    const status = document.getElementById('loading-status');
    if (bar) bar.style.width = percent + '%';
    if (status) status.textContent = message;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Set city background image
async function setCityBackground(city, state) {
    const query = `${city} ${state} outdoor landscape`;
    const accessKey = 'YOUR_UNSPLASH_KEY'; // Using a generic gradient instead

    // Using gradient backgrounds since we can't use Unsplash without API key
    const gradients = [
        'linear-gradient(135deg, #0277BD 0%, #2E7D32 100%)',
        'linear-gradient(135deg, #00ACC1 0%, #43A047 100%)',
        'linear-gradient(135deg, #0288D1 0%, #66BB6A 100%)',
        'linear-gradient(135deg, #4DB6AC 0%, #26A69A 100%)',
        'linear-gradient(135deg, #1976D2 0%, #388E3C 100%)',
    ];

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    const heroBg = document.getElementById('hero-bg');
    const cityBg = document.getElementById('city-bg');

    if (heroBg) heroBg.style.background = randomGradient;
    if (cityBg) cityBg.style.background = randomGradient;
}

// Fetch weather data for location
async function fetchWeather(lat, lng, cityName) {
    console.log('Fetching weather for:', cityName);

    try {
        // Using Open-Meteo API (free, no API key required)
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=auto`;

        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error('Weather fetch failed');
        }

        const data = await response.json();
        console.log('Weather data:', data);

        displayWeather(data, cityName);
    } catch (error) {
        console.error('Weather error:', error);
        // Hide weather widget if fetch fails
        const widget = document.getElementById('weather-widget');
        if (widget) widget.style.display = 'none';
    }
}

// Get weather description from WMO code
function getWeatherDescription(code) {
    const weatherCodes = {
        0: { desc: 'Clear sky', icon: '☀️' },
        1: { desc: 'Mainly clear', icon: '🌤️' },
        2: { desc: 'Partly cloudy', icon: '⛅' },
        3: { desc: 'Overcast', icon: '☁️' },
        45: { desc: 'Foggy', icon: '🌫️' },
        48: { desc: 'Foggy', icon: '🌫️' },
        51: { desc: 'Light drizzle', icon: '🌦️' },
        53: { desc: 'Moderate drizzle', icon: '🌦️' },
        55: { desc: 'Heavy drizzle', icon: '🌧️' },
        61: { desc: 'Light rain', icon: '🌧️' },
        63: { desc: 'Moderate rain', icon: '🌧️' },
        65: { desc: 'Heavy rain', icon: '🌧️' },
        71: { desc: 'Light snow', icon: '🌨️' },
        73: { desc: 'Moderate snow', icon: '🌨️' },
        75: { desc: 'Heavy snow', icon: '❄️' },
        77: { desc: 'Snow grains', icon: '🌨️' },
        80: { desc: 'Light showers', icon: '🌦️' },
        81: { desc: 'Moderate showers', icon: '🌧️' },
        82: { desc: 'Heavy showers', icon: '⛈️' },
        85: { desc: 'Light snow showers', icon: '🌨️' },
        86: { desc: 'Heavy snow showers', icon: '❄️' },
        95: { desc: 'Thunderstorm', icon: '⛈️' },
        96: { desc: 'Thunderstorm with hail', icon: '⛈️' },
        99: { desc: 'Thunderstorm with heavy hail', icon: '⛈️' }
    };

    return weatherCodes[code] || { desc: 'Unknown', icon: '🌡️' };
}

// Get activity recommendation based on weather
function getWeatherAdvice(temp, code, wind) {
    // Bad weather codes
    const badWeather = [51, 53, 55, 61, 63, 65, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99];

    if (badWeather.includes(code)) {
        return { icon: '🏠', text: 'Great day for indoor activities!' };
    }

    if (temp > 90) {
        return { icon: '🌊', text: 'Hot! Try water activities or indoor options.' };
    }

    if (temp < 32) {
        return { icon: '❄️', text: 'Cold! Bundle up or try indoor activities.' };
    }

    if (wind > 20) {
        return { icon: '💨', text: 'Windy! Indoor activities recommended.' };
    }

    if (temp >= 60 && temp <= 80) {
        return { icon: '✨', text: 'Perfect weather for outdoor activities!' };
    }

    return { icon: '👍', text: 'Good conditions for outdoor fun!' };
}

// Display weather in the widget
function displayWeather(data, cityName) {
    const current = data.current;
    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const wind = Math.round(current.windspeed_10m);
    const weatherCode = current.weathercode;

    const weather = getWeatherDescription(weatherCode);
    const advice = getWeatherAdvice(temp, weatherCode, wind);

    // Update UI
    document.getElementById('weather-temp').textContent = temp;
    document.getElementById('weather-desc').textContent = weather.desc;
    document.getElementById('weather-humidity').textContent = humidity;
    document.getElementById('weather-wind').textContent = wind;

    const adviceElement = document.getElementById('weather-advice');
    const recommendationElement = document.getElementById('weather-recommendation');
    if (adviceElement) adviceElement.textContent = advice.text;
    if (recommendationElement) {
        const iconSpan = recommendationElement.querySelector('.detail-icon');
        if (iconSpan) iconSpan.textContent = advice.icon;
    }

    // Update weather icon (simplified for now - using emoji in the description)
    const iconElement = document.getElementById('weather-icon');
    if (iconElement) {
        iconElement.innerHTML = `<div style="font-size: 48px;">${weather.icon}</div>`;
    }

    // Show widget
    const widget = document.getElementById('weather-widget');
    if (widget) {
        widget.style.display = 'block';
    }

    console.log('Weather displayed successfully');
}

// Geocode city/state
async function geocodeLocation(city, state) {
    console.log(`Geocoding: ${city}, ${state}`);
    updateProgress(20, `Locating ${city}, ${state}...`);

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

        console.log('Geocoded:', userLocation);
        await setCityBackground(city, state);
        return userLocation;

    } catch (error) {
        console.error('Geocoding error:', error);
        throw new Error(`Could not find "${city}, ${state}"`);
    }
}

// Search for activities
async function searchActivities(lat, lng) {
    console.log('Searching for activities at:', lat, lng);
    updateProgress(40, 'Searching for outdoor AND indoor activities...');

    const radius = 40000; // 25 miles in meters

    // Comprehensive query for outdoor AND indoor activities
    const query = `[out:json][timeout:90];
(
  node["leisure"](around:${radius},${lat},${lng});
  way["leisure"](around:${radius},${lat},${lng});
  node["natural"](around:${radius},${lat},${lng});
  way["natural"](around:${radius},${lat},${lng});
  node["tourism"](around:${radius},${lat},${lng});
  way["tourism"](around:${radius},${lat},${lng});
  node["sport"](around:${radius},${lat},${lng});
  way["sport"](around:${radius},${lat},${lng});
  node["amenity"](around:${radius},${lat},${lng});
  way["amenity"](around:${radius},${lat},${lng});
  node["highway"="path"](around:${radius},${lat},${lng});
  node["highway"="footway"](around:${radius},${lat},${lng});
  node["highway"="cycleway"](around:${radius},${lat},${lng});
  way["highway"="path"](around:${radius},${lat},${lng});
  way["highway"="footway"](around:${radius},${lat},${lng});
  way["highway"="cycleway"](around:${radius},${lat},${lng});
);
out center 500;`;

    try {
        console.log('Fetching from Overpass API...');
        console.log('Query:', query);

        const response = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: query
        });

        console.log('API Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }

        updateProgress(70, 'Processing results...');
        const data = await response.json();
        console.log(`Found ${data.elements ? data.elements.length : 0} raw locations from OpenStreetMap`);

        if (!data.elements || data.elements.length === 0) {
            console.warn('No results from OpenStreetMap API');
            throw new Error('No outdoor activities found in this area. Try a larger city nearby.');
        }

        const processed = processResults(data.elements, lat, lng);
        console.log(`Processed down to ${processed.length} unique activities`);

        if (processed.length === 0) {
            console.warn('No activities passed filtering');
            console.warn('This usually means the filters are too strict or the area has limited OSM data');
            throw new Error('No outdoor activities found in this area. Try searching for:\n• A larger nearby city\n• A major metropolitan area\n• A different location with more outdoor spaces');
        }

        console.log('✓ Search successful! Returning activities...');
        return processed;

    } catch (error) {
        console.error('Search error:', error);
        throw error;
    }
}

// Process OpenStreetMap results - only real named places
function processResults(elements, userLat, userLng) {
    const results = [];
    const seen = new Set();

    console.log('Processing', elements.length, 'elements from OpenStreetMap...');

    let skippedReasons = {
        noCoords: 0,
        noName: 0,
        nonActivity: 0,
        shop: 0,
        historic: 0,
        duplicate: 0,
        tooFar: 0,
        noCategory: 0
    };

    // Blacklist of amenity types that are NOT activities
    const nonActivityAmenities = [
        'place_of_worship', 'church', 'mosque', 'synagogue', 'temple',
        'school', 'college', 'university', 'library',
        'restaurant', 'cafe', 'fast_food', 'bar', 'pub',
        'bank', 'atm', 'post_office', 'pharmacy',
        'hospital', 'clinic', 'doctors', 'dentist',
        'parking', 'fuel', 'car_wash',
        'shop', 'marketplace', 'supermarket',
        'townhall', 'courthouse', 'prison',
        'fire_station', 'police'
    ];

    // Blacklist of building types that are NOT activities
    const nonActivityBuildings = [
        'church', 'cathedral', 'chapel', 'mosque', 'synagogue', 'temple',
        'commercial', 'retail', 'office', 'industrial',
        'residential', 'apartments', 'house',
        'school', 'university', 'hospital'
    ];

    elements.forEach(el => {
        let lat, lng;
        if (el.lat && el.lon) {
            lat = el.lat;
            lng = el.lon;
        } else if (el.center) {
            lat = el.center.lat;
            lng = el.center.lon;
        } else {
            skippedReasons.noCoords++;
            return; // Skip if no coordinates
        }

        // Get name (allow unnamed natural features like trails)
        const name = el.tags?.name || el.tags?.ref || 'Unnamed Location';

        // Skip if it's a generic unnamed amenity/building (but allow unnamed natural features)
        if ((!el.tags?.name && !el.tags?.ref) &&
            (el.tags?.amenity || el.tags?.building) &&
            !el.tags?.natural && !el.tags?.highway) {
            skippedReasons.noName++;
            return; // Skip unnamed non-natural places
        }

        // Filter out non-activity places
        if (el.tags.amenity && nonActivityAmenities.includes(el.tags.amenity)) {
            skippedReasons.nonActivity++;
            return; // Skip churches, schools, restaurants, etc.
        }

        if (el.tags.building && nonActivityBuildings.includes(el.tags.building)) {
            skippedReasons.nonActivity++;
            return; // Skip non-activity buildings
        }

        if (el.tags.shop) {
            skippedReasons.shop++;
            return; // Skip all shops
        }

        // Skip historical sites unless they have activity tags
        if (el.tags.historic && !el.tags.sport && !el.tags.leisure && !el.tags.natural) {
            skippedReasons.historic++;
            return; // Skip historical sites
        }

        // Deduplicate by name and approximate location
        const key = `${name.toLowerCase()}-${lat.toFixed(3)}-${lng.toFixed(3)}`;
        if (seen.has(key)) {
            skippedReasons.duplicate++;
            return; // Skip duplicates
        }
        seen.add(key);

        const distance = calculateDistance(userLat, userLng, lat, lng);
        if (parseFloat(distance) > 30) {
            skippedReasons.tooFar++;
            return; // Skip if too far (30 miles max)
        }

        const category = categorizeActivity(el.tags);
        if (!category) {
            skippedReasons.noCategory++;
            return; // Skip if can't categorize
        }

        const { duration, difficulty, cost } = generateAttributes(category);

        // Extract address information from OSM tags
        const address = buildAddress(el.tags);

        // Generate a better name if unnamed
        let displayName = name;
        if (name === 'Unnamed Location') {
            const typeData = ACTIVITY_TYPES[category];
            const categoryLabel = typeData ? typeData.label : category;
            displayName = `${categoryLabel} Location`;
        }

        results.push({
            id: `activity-${el.id}`,
            name: displayName,
            category: category,
            lat: lat,
            lng: lng,
            distance: distance,
            description: generateDescription(el.tags, category),
            duration: duration,
            difficulty: difficulty,
            cost: cost,
            address: address,
            tags: el.tags,
            osmType: el.type,
            osmId: el.id
        });
    });

    console.log(`Kept ${results.length} unique, named activities after deduplication and filtering`);
    console.log('Skipped breakdown:', skippedReasons);
    console.log(`Total processed: ${elements.length}, Kept: ${results.length}, Filtered: ${elements.length - results.length}`);

    // Sort by distance - closest first
    results.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

    return results;
}

// Build address from OpenStreetMap tags
function buildAddress(tags) {
    const parts = [];

    // Try to build a complete address
    if (tags['addr:housenumber'] && tags['addr:street']) {
        parts.push(`${tags['addr:housenumber']} ${tags['addr:street']}`);
    } else if (tags['addr:street']) {
        parts.push(tags['addr:street']);
    }

    if (tags['addr:city']) {
        parts.push(tags['addr:city']);
    }

    if (tags['addr:state']) {
        parts.push(tags['addr:state']);
    }

    if (tags['addr:postcode']) {
        parts.push(tags['addr:postcode']);
    }

    // If we have a complete address, return it
    if (parts.length > 0) {
        return parts.join(', ');
    }

    // Fallback: return whatever location info we have
    return 'Address available via map';
}

// Categorize activity based on OpenStreetMap tags
function categorizeActivity(tags) {
    const name = (tags.name || tags.ref || '').toLowerCase();

    // PRIORITY: Check OSM tags first (most reliable)

    // INDOOR ACTIVITIES - Check these first
    // Climbing gyms (indoor only)
    if (tags.sport === 'climbing' && tags.leisure === 'sports_centre') return 'indoorclimbing';

    // Swimming pools
    if (tags.leisure === 'swimming_pool' || tags.sport === 'swimming') return 'indoorpool';

    // Bowling
    if (tags.amenity === 'bowling_alley') return 'bowling';

    // Ice skating
    if (tags.leisure === 'ice_rink' || tags.sport === 'ice_skating') return 'iceskating';

    // Fitness centers & gyms
    if (tags.leisure === 'fitness_centre' || tags.leisure === 'fitness_center') return 'fitness';

    // Martial arts
    if (tags.sport === 'martial_arts') return 'martialarts';

    // Gymnastics
    if (tags.sport === 'gymnastics') return 'gymnastics';

    // Racquet sports
    if (tags.sport === 'squash') return 'squash';
    if (tags.sport === 'badminton') return 'badminton';
    if (tags.sport === 'table_tennis') return 'tabletennis';
    if (tags.sport === 'racquetball') return 'racquetball';

    // Indoor team sports
    if (tags.sport === 'basketball' && tags.leisure === 'sports_centre') return 'basketball';
    if (tags.sport === 'volleyball' && tags.leisure === 'sports_centre') return 'volleyball';

    // OUTDOOR ACTIVITIES - Check OSM tags
    // Water sports (tags only - most reliable)
    if (tags.sport === 'diving') return 'scuba';
    if (tags.sport === 'surfing') return 'surfing';
    if (tags.sport === 'sailing') return 'sailing';
    if (tags.sport === 'swimming' && tags.natural === 'water') return 'kayaking';
    if (tags.sport === 'canoe' || tags.sport === 'kayak') return 'kayaking';

    // Winter sports
    if (tags.sport === 'skiing') return 'skiing';
    if (tags.sport === 'snowboard') return 'snowboarding';
    if (tags.sport === 'ice_climbing') return 'iceclimbing';

    // Climbing (outdoor)
    if (tags.sport === 'climbing' && !tags.leisure) return 'rockclimbing';
    if (tags.natural === 'cliff' && tags.sport === 'climbing') return 'rockclimbing';

    // Golf
    if (tags.sport === 'golf' || tags.leisure === 'golf_course') return 'parks';

    // Fishing
    if (tags.sport === 'fishing') return 'fishing';

    // Cycling
    if (tags.sport === 'cycling' || tags.route === 'bicycle') return 'mountainbiking';

    // Horseback riding
    if (tags.sport === 'horse_racing' || tags.sport === 'equestrian') return 'horseback';

    // Natural features for activities
    if (tags.natural === 'beach') return 'surfing';
    if (tags.natural === 'peak') return 'hiking';
    if (tags.leisure === 'marina' || tags.amenity === 'boat_rental') return 'sailing';

    // Hiking/trails (tag-based only)
    if (tags.route === 'hiking') return 'hiking';
    if (tags.highway === 'path' && tags.sac_scale) return 'hiking'; // sac_scale = alpine hiking difficulty

    // Camping
    if (tags.tourism === 'camp_site' || tags.tourism === 'caravan_site') return 'camping';

    // Viewpoints
    if (tags.tourism === 'viewpoint') return 'photography';

    // Nature/wildlife areas
    if (tags.leisure === 'nature_reserve') return 'wildlife';
    if (tags.boundary === 'national_park' || tags.boundary === 'protected_area') return 'parks';

    // Sports centers
    if (tags.leisure === 'sports_centre' || tags.leisure === 'stadium') return 'fitness';
    if (tags.leisure === 'track' && tags.sport === 'running') return 'trailrunning';

    // Parks (only if explicitly tagged)
    if (tags.leisure === 'park' || tags.leisure === 'recreation_ground') return 'parks';
    if (tags.tourism === 'picnic_site') return 'parks';
    if (tags.leisure === 'garden' || tags.leisure === 'dog_park') return 'parks';

    // Water bodies (with natural tag - these are legitimate outdoor spaces)
    if (tags.natural === 'water' || tags.natural === 'bay') return 'kayaking';
    if (tags.waterway === 'river' || tags.waterway === 'stream') return 'kayaking';

    // Mountains, hills, cliffs (natural outdoor features)
    if (tags.natural === 'hill' || tags.natural === 'volcano') return 'hiking';
    if (tags.natural === 'cliff' || tags.natural === 'rock') return 'hiking';

    // Forests and natural areas
    if (tags.natural === 'wood' || tags.landuse === 'forest') return 'hiking';
    if (tags.natural === 'wetland' || tags.natural === 'scrub') return 'wildlife';

    // Trails and paths (with highway=path or footway)
    if (tags.highway === 'path' || tags.highway === 'footway' || tags.highway === 'track') return 'hiking';
    if (tags.highway === 'cycleway') return 'roadcycling';

    // Playgrounds and sports fields
    if (tags.leisure === 'playground') return 'parks';
    if (tags.leisure === 'pitch') return 'fitness';

    // FALLBACK: Name-based checks (more lenient but still safe)
    // Only use if no OSM tags matched above

    // Specific facility names (must have "center", "gym", "club" to be considered)
    if ((name.includes('climbing') || name.includes('bouldering')) && (name.includes('gym') || name.includes('center') || name.includes('centre'))) {
        return 'indoorclimbing';
    }

    if (name.includes('trampoline') && (name.includes('park') || name.includes('zone') || name.includes('center'))) {
        return 'trampoline';
    }

    if (name.includes('yoga') && (name.includes('studio') || name.includes('center'))) {
        return 'yoga';
    }

    if ((name.includes('fitness') || name.includes('gym') || name.includes('crossfit')) && (name.includes('center') || name.includes('club'))) {
        return 'fitness';
    }

    // Trails and outdoor spaces (name-based)
    if (name.includes('trail') && !name.includes('mobile')) return 'hiking';
    if (name.includes('trailhead')) return 'hiking';
    if (name.includes(' park') && !name.includes('parking') && !name.includes('trailer')) return 'parks';
    if (name.includes('open space') || name.includes('greenway')) return 'parks';
    if (name.includes('preserve') || name.includes('conservation')) return 'wildlife';

    // Ski resorts (very specific names)
    if (name.includes('ski resort') || name.includes('ski area')) return 'skiing';

    // Only return a category if we have reasonable confidence
    // Return null otherwise to filter it out
    return null;
}

// Generate activity attributes
function generateAttributes(category) {
    const waterActivities = ['scuba', 'snorkeling', 'kayaking', 'surfing', 'rafting', 'standup', 'sailing'];
    const extremeActivities = ['parasailing', 'skydiving', 'hanggliding', 'paragliding', 'iceclimbing', 'canyoneering'];
    const winterActivities = ['skiing', 'snowboarding', 'iceclimbing', 'iceskating'];
    const indoorActivities = ['indoorclimbing', 'indoorpool', 'bowling', 'iceskating', 'trampoline', 'yoga', 'fitness', 'martialarts', 'dance', 'gymnastics', 'squash', 'badminton', 'tabletennis', 'basketball', 'volleyball', 'racquetball', 'lasertag', 'indoorsoccer'];

    // Duration
    let duration;
    if (['photography', 'birdwatching', 'stargazing'].includes(category)) {
        duration = 'short';
    } else if (['camping', 'backpacking'].includes(category)) {
        duration = 'multiday';
    } else if (extremeActivities.includes(category)) {
        duration = 'medium';
    } else if (['yoga', 'fitness', 'tabletennis', 'squash', 'badminton'].includes(category)) {
        duration = 'short';
    } else if (indoorActivities.includes(category)) {
        duration = 'medium';
    } else {
        duration = Math.random() > 0.5 ? 'medium' : 'long';
    }

    // Difficulty
    let difficulty;
    if (extremeActivities.includes(category)) {
        difficulty = Math.random() > 0.5 ? 'advanced' : 'expert';
    } else if (['hiking', 'parks', 'photography', 'camping', 'bowling', 'yoga', 'tabletennis'].includes(category)) {
        difficulty = 'beginner';
    } else if (['indoorclimbing', 'gymnastics', 'martialarts', 'squash', 'racquetball'].includes(category)) {
        difficulty = Math.random() > 0.5 ? 'intermediate' : 'advanced';
    } else if (indoorActivities.includes(category)) {
        difficulty = 'intermediate';
    } else {
        difficulty = 'intermediate';
    }

    // Cost
    let cost;
    if (extremeActivities.includes(category) || winterActivities.includes(category)) {
        cost = 'premium';
    } else if (['parks', 'hiking', 'photography', 'stargazing'].includes(category)) {
        cost = 'free';
    } else if (['bowling', 'iceskating', 'trampoline', 'lasertag'].includes(category)) {
        cost = 'budget';
    } else if (['fitness', 'yoga', 'martialarts', 'dance', 'gymnastics'].includes(category)) {
        cost = Math.random() > 0.5 ? 'moderate' : 'budget';
    } else if (['indoorpool', 'indoorclimbing', 'basketball', 'volleyball', 'squash', 'badminton'].includes(category)) {
        cost = 'budget';
    } else if (waterActivities.includes(category)) {
        cost = Math.random() > 0.5 ? 'moderate' : 'budget';
    } else {
        cost = 'budget';
    }

    return { duration, difficulty, cost };
}

// Generate description for real OpenStreetMap locations
function generateDescription(tags, category) {
    // Try to use actual OpenStreetMap description first
    if (tags.description) {
        return tags.description;
    }

    const descriptions = {
        // Outdoor activities
        parasailing: 'Real location for parasailing and aerial water sports',
        scuba: 'Dive site for exploring underwater environments',
        snorkeling: 'Water location for snorkeling and marine observation',
        kayaking: 'Water access point for kayaking and paddling',
        surfing: 'Beach or surf spot for wave riding',
        skiing: 'Ski area or mountain resort for winter sports',
        snowboarding: 'Snowboarding area with slopes and terrain',
        iceclimbing: 'Ice climbing location with frozen formations',
        rockclimbing: 'Climbing area with natural rock features',
        canyoneering: 'Canyon area for technical outdoor activities',
        caving: 'Cave system for underground exploration',
        ziplining: 'Zipline course through natural landscape',
        hanggliding: 'Launch site for hang gliding activities',
        paragliding: 'Paragliding site with launch areas',
        skydiving: 'Skydiving center or drop zone',
        ballooning: 'Hot air balloon launch area',
        mountainbiking: 'Mountain bike trails and terrain',
        roadcycling: 'Cycling route or bike path',
        trailrunning: 'Trail system for running and hiking',
        rafting: 'River location for whitewater rafting',
        standup: 'Water area for stand-up paddleboarding',
        windsurfing: 'Windsurfing location with water access',
        kitesurfing: 'Kitesurfing beach or water area',
        sailing: 'Marina or sailing facility',
        fishing: 'Fishing spot or water access',
        horseback: 'Equestrian facility or riding trails',
        camping: 'Campground or camping area',
        backpacking: 'Trailhead for backpacking trips',
        wildlife: 'Nature area for wildlife observation',
        birdwatching: 'Habitat for bird watching',
        photography: 'Scenic viewpoint or photo location',
        stargazing: 'Dark sky area for stargazing',
        geocaching: 'Outdoor area for geocaching activities',
        orienteering: 'Terrain for orienteering navigation',
        hiking: 'Trail system for hiking',
        parks: 'Park or recreation area',

        // Indoor activities (perfect for bad weather!)
        indoorclimbing: 'Indoor climbing gym with walls and bouldering',
        indoorpool: 'Indoor swimming pool facility',
        bowling: 'Bowling alley for all skill levels',
        iceskating: 'Indoor ice skating rink',
        trampoline: 'Trampoline park with foam pits and activities',
        yoga: 'Yoga studio offering classes and sessions',
        fitness: 'Fitness center or gym with equipment and classes',
        martialarts: 'Martial arts studio or dojo',
        dance: 'Dance studio with various styles and classes',
        gymnastics: 'Gymnastics facility with equipment and instruction',
        squash: 'Squash courts for racquet sport',
        badminton: 'Badminton facility with courts',
        tabletennis: 'Table tennis facility or club',
        basketball: 'Indoor basketball court or facility',
        volleyball: 'Indoor volleyball court',
        racquetball: 'Racquetball courts',
        lasertag: 'Laser tag arena for active fun',
        indoorsoccer: 'Indoor soccer facility or futsal court'
    };

    const desc = descriptions[category] || 'Recreation facility';

    // Add location type info if available
    const locationType = tags.leisure || tags.natural || tags.tourism || tags.sport || tags.amenity || '';
    if (locationType) {
        return `${desc} (${locationType})`;
    }

    return desc;
}

// Add activity to calendar (iCal format)
// Schedule modal state
let scheduleModalData = null;

// Open schedule modal
window.openScheduleModal = function(id, name, category, distance, duration, difficulty, cost, lat, lng, address) {
    scheduleModalData = { id, name, category, distance, duration, difficulty, cost, lat, lng, address };

    const modal = document.getElementById('schedule-modal');
    const modalTitle = document.getElementById('schedule-modal-title');

    if (modal && modalTitle) {
        modalTitle.textContent = name;

        // Set minimum date to today
        const dateInput = document.getElementById('schedule-date');
        const timeInput = document.getElementById('schedule-time');

        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }

        if (timeInput) {
            // Set default time to 9:00 AM
            timeInput.value = '09:00';
        }

        modal.style.display = 'flex';
    }
};

// Close schedule modal
window.closeScheduleModal = function() {
    const modal = document.getElementById('schedule-modal');
    if (modal) {
        modal.style.display = 'none';
        scheduleModalData = null;
    }
};

// Confirm schedule addition
window.confirmSchedule = function() {
    const dateInput = document.getElementById('schedule-date');
    const timeInput = document.getElementById('schedule-time');

    if (!dateInput || !timeInput || !scheduleModalData) {
        showToast('Please select a date and time');
        return;
    }

    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    if (!selectedDate || !selectedTime) {
        showToast('Please select both date and time');
        return;
    }

    // Format date and time for display
    const dateObj = new Date(selectedDate + 'T' + selectedTime);
    const day = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    const dateFormatted = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeFormatted = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    // Call the existing addToSchedule function
    addToSchedule(
        scheduleModalData.id,
        scheduleModalData.name,
        scheduleModalData.category,
        day,
        dateFormatted,
        timeFormatted,
        scheduleModalData.distance,
        scheduleModalData.duration,
        scheduleModalData.difficulty,
        scheduleModalData.cost,
        scheduleModalData.lat,
        scheduleModalData.lng,
        scheduleModalData.address
    );

    closeScheduleModal();
};

// Apply filters
function applyFilters() {
    console.log('Applying filters:', {
        types: Array.from(activeFilters.types),
        durations: Array.from(activeFilters.durations),
        difficulties: Array.from(activeFilters.difficulties),
        costs: Array.from(activeFilters.costs)
    });

    if (allActivities.length === 0) {
        console.warn('No activities to filter');
        return;
    }

    filteredActivities = allActivities.filter(activity => {
        // Type filter
        if (activeFilters.types.size > 0 && !activeFilters.types.has(activity.category)) {
            return false;
        }

        // Duration filter
        if (activeFilters.durations.size > 0 && !activeFilters.durations.has(activity.duration)) {
            return false;
        }

        // Difficulty filter
        if (activeFilters.difficulties.size > 0 && !activeFilters.difficulties.has(activity.difficulty)) {
            return false;
        }

        // Cost filter
        if (activeFilters.costs.size > 0 && !activeFilters.costs.has(activity.cost)) {
            return false;
        }

        return true;
    });

    console.log(`Filtered ${allActivities.length} activities down to ${filteredActivities.length}`);
    displayActivities();
}

// Render type filters
function renderTypeFilters() {
    const container = document.getElementById('type-filters');
    if (!container) return;

    const types = new Set(allActivities.map(a => a.category));
    const sortedTypes = Array.from(types).sort((a, b) =>
        ACTIVITY_TYPES[a].label.localeCompare(ACTIVITY_TYPES[b].label)
    );

    let html = '';
    sortedTypes.forEach(type => {
        const typeData = ACTIVITY_TYPES[type];
        if (!typeData) return;

        html += `
            <label class="filter-checkbox">
                <input type="checkbox" value="${type}" class="type-filter">
                <span>${typeData.label}</span>
            </label>
        `;
    });

    container.innerHTML = html;

    // Attach listeners
    document.querySelectorAll('.type-filter').forEach(cb => {
        cb.addEventListener('change', (e) => {
            console.log(`Type filter changed: ${e.target.value} = ${e.target.checked}`);
            if (e.target.checked) {
                activeFilters.types.add(e.target.value);
            } else {
                activeFilters.types.delete(e.target.value);
            }
            applyFilters();
        });
    });

    // Update scroll state after rendering filters
    setTimeout(() => {
        const filtersSidebar = document.querySelector('.filters-sidebar');
        if (filtersSidebar && window.updateFilterScrollState) {
            window.updateFilterScrollState();
        }
    }, 100);
}

// Display activities
function displayActivities() {
    const container = document.getElementById('activities-container');
    const resultsCount = document.getElementById('results-count');

    if (!container) return;

    // Check if any filters are active
    const hasActiveFilters = activeFilters.types.size > 0 ||
                             activeFilters.durations.size > 0 ||
                             activeFilters.difficulties.size > 0 ||
                             activeFilters.costs.size > 0;

    const activities = hasActiveFilters ? filteredActivities : allActivities;

    console.log(`Displaying activities: hasActiveFilters=${hasActiveFilters}, showing ${activities.length} activities`);

    if (resultsCount) {
        resultsCount.textContent = `${activities.length} experiences found`;
    }

    if (activities.length === 0) {
        container.innerHTML = '<div class="empty-state"><h2>No activities found</h2><p>Try adjusting your filters</p></div>';
        return;
    }

    let html = '';
    activities.forEach(activity => {
        const typeData = ACTIVITY_TYPES[activity.category];

        const costLabels = { free: 'Free', budget: '$', moderate: '$$', premium: '$$$' };
        const durationLabels = { short: '<1hr', medium: '1-3hrs', long: '3+ hrs', fullday: 'Full day', multiday: 'Multi-day' };

        // Get image URL for this activity type
        const imageUrl = typeData ? typeData.image : 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800';

        // Check if this is an indoor activity
        const isIndoor = typeData && typeData.indoor;
        const indoorBadge = isIndoor ? '<span class="meta-badge" style="background: #E3F2FD; color: #0277BD;"><span class="meta-label">☂</span> Indoor (Weather-Proof!)</span>' : '';

        // Build Google Maps directions URL
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${activity.lat},${activity.lng}`;

        html += `
            <div class="activity-card">
                <div class="activity-image" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;">
                    <div class="activity-category">${typeData ? typeData.label : activity.category}</div>
                </div>
                <div class="activity-body">
                    <div class="activity-header">
                        <h3 class="activity-title">${activity.name}</h3>
                        <span class="activity-distance">${activity.distance} mi</span>
                    </div>
                    <p class="activity-description">${activity.description}</p>

                    <div class="activity-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span class="location-address">${activity.address}</span>
                    </div>

                    <div class="activity-meta">
                        <span class="meta-badge" style="background: #E8F5E9; color: #2E7D32;"><span class="meta-label">✓</span> Real Location</span>
                        ${indoorBadge}
                        <span class="meta-badge"><span class="meta-label">Duration:</span> ${durationLabels[activity.duration] || activity.duration}</span>
                        <span class="meta-badge"><span class="meta-label">Level:</span> ${activity.difficulty}</span>
                        <span class="meta-badge"><span class="meta-label">Cost:</span> ${costLabels[activity.cost] || activity.cost}</span>
                    </div>

                    <div class="activity-actions">
                        <a href="${directionsUrl}" target="_blank" class="action-btn directions-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                            </svg>
                            Get Directions
                        </a>
                        <button class="action-btn share-btn" onclick="shareActivity('${escapeQuotes(activity.name)}', '${activity.lat}', '${activity.lng}', '${escapeQuotes(typeData ? typeData.label : activity.category)}')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                    </div>

                    <div class="activity-footer">
                        <button class="schedule-btn primary-btn" onclick="openScheduleModal('${escapeQuotes(activity.id)}', '${escapeQuotes(activity.name)}', '${activity.category}', '${activity.distance}', '${activity.duration}', '${activity.difficulty}', '${activity.cost}', '${activity.lat}', '${activity.lng}', '${escapeQuotes(activity.address)}')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            Add to Schedule
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Share activity function
window.shareActivity = async function(name, lat, lng, category) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const shareText = `Check out this activity: ${name} (${category})\n\nView on map: ${mapsUrl}`;
    const shareTitle = `Outset: ${name}`;

    // Try to use Web Share API if available (mobile friendly)
    if (navigator.share) {
        try {
            await navigator.share({
                title: shareTitle,
                text: shareText,
                url: mapsUrl
            });
            console.log('Activity shared successfully');
        } catch (err) {
            console.log('Share cancelled or failed:', err);
            // Fallback to copy to clipboard
            copyToClipboard(shareText);
        }
    } else {
        // Fallback: copy to clipboard
        copyToClipboard(shareText);
    }
};

// Copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Activity link copied to clipboard! Share it with your friends.');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showToast('Unable to copy. Please try again.');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('Activity link copied to clipboard! Share it with your friends.');
        } catch (err) {
            console.error('Failed to copy:', err);
            showToast('Unable to copy. Please try again.');
        }
        document.body.removeChild(textArea);
    }
}

// Show toast notification
function showToast(message) {
    // Remove any existing toasts
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: #2E7D32;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 0.95rem;
        font-weight: 500;
        max-width: 90%;
        text-align: center;
        animation: slideUp 0.3s ease;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add to schedule
window.addToSchedule = function(id, name, category, day, date, time, distance, duration, difficulty, cost, lat, lng, address) {
    const typeData = ACTIVITY_TYPES[category];

    schedule.push({
        id, name, category,
        categoryLabel: typeData ? typeData.label : category,
        day, date, time, distance, duration, difficulty, cost,
        location: userLocation.name,
        lat: lat,
        lng: lng,
        address: address,
        addedAt: new Date().toISOString()
    });

    localStorage.setItem('outset_schedule', JSON.stringify(schedule));
    showToast(`Added ${name} to your schedule!`);
};

// Remove from schedule
window.removeFromSchedule = function(idx) {
    if (confirm('Remove this activity?')) {
        schedule.splice(idx, 1);
        localStorage.setItem('outset_schedule', JSON.stringify(schedule));
        showSchedule();
    }
};

// Display schedule
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

    const costLabels = { free: 'Free', budget: '$', moderate: '$$', premium: '$$$' };
    const durationLabels = { short: '<1hr', medium: '1-3hrs', long: '3+ hrs', fullday: 'Full day', multiday: 'Multi-day' };

    let html = '';
    sorted.forEach((item, idx) => {
        const directionsUrl = item.lat && item.lng ? `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}` : '#';
        const hasLocation = item.lat && item.lng;

        html += `
            <div class="schedule-card">
                <div class="schedule-info">
                    <h3>${item.name}</h3>
                    <div class="schedule-details">
                        <div class="schedule-detail">
                            <span class="detail-label">Type:</span> ${item.categoryLabel}
                        </div>
                        <div class="schedule-detail">
                            <span class="detail-label">When:</span> ${item.day}, ${item.date} at ${item.time}
                        </div>
                        <div class="schedule-detail">
                            <span class="detail-label">Location:</span> ${item.distance} mi from ${item.location}
                        </div>
                        ${item.address ? `
                        <div class="schedule-detail">
                            <span class="detail-label">Address:</span> ${item.address}
                        </div>
                        ` : ''}
                        <div class="schedule-detail">
                            <span class="detail-label">Duration:</span> ${durationLabels[item.duration]}
                        </div>
                        <div class="schedule-detail">
                            <span class="detail-label">Difficulty:</span> ${item.difficulty}
                        </div>
                        <div class="schedule-detail">
                            <span class="detail-label">Cost:</span> ${costLabels[item.cost]}
                        </div>
                    </div>
                    ${hasLocation ? `
                    <div class="schedule-actions" style="display: flex; gap: 0.75rem; margin-top: 1rem;">
                        <a href="${directionsUrl}" target="_blank" class="action-btn directions-btn" style="flex: 1; text-decoration: none;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                            </svg>
                            Get Directions
                        </a>
                        <button class="action-btn share-btn" style="flex: 1;" onclick="shareActivity('${escapeQuotes(item.name)}', '${item.lat}', '${item.lng}', '${escapeQuotes(item.categoryLabel)}')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                    </div>
                    ` : ''}
                </div>
                <button class="remove-btn" onclick="removeFromSchedule(${idx})">Remove</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Main search
async function search() {
    const city = document.getElementById('city-input').value.trim();
    const state = document.getElementById('state-input').value;

    if (!city || !state) {
        alert('Please enter both city and state');
        return;
    }

    console.log(`\n===== STARTING SEARCH: ${city}, ${state} =====`);

    try {
        showPage('loading-page');
        updateProgress(10, 'Starting search...');

        // Step 1: Geocode
        console.log('Step 1: Geocoding location...');
        await geocodeLocation(city, state);
        console.log(`✓ Geocoded to: ${userLocation.lat}, ${userLocation.lng}`);

        // Fetch weather for location
        await fetchWeather(userLocation.lat, userLocation.lng, userLocation.name);

        // Step 2: Search activities
        console.log('Step 2: Searching for activities...');
        allActivities = await searchActivities(userLocation.lat, userLocation.lng);
        filteredActivities = [...allActivities];

        console.log(`✓ FOUND ${allActivities.length} REAL ACTIVITIES`);
        if (allActivities.length > 0) {
            console.log('First 5 activities:', allActivities.slice(0, 5).map(a => `${a.name} (${a.category})`));
        }

        updateProgress(100, 'Complete!');

        // Step 3: Display results
        setTimeout(() => {
            console.log('Step 3: Displaying activities...');
            showPage('activities-page');
            const locationInfo = document.getElementById('location-info');
            if (locationInfo) {
                locationInfo.textContent = `${userLocation.name} - ${allActivities.length} Real Outdoor Locations`;
            }
            renderTypeFilters();
            displayActivities();
            console.log('✓ Display complete');
        }, 500);

    } catch (error) {
        console.error('❌ Search Error:', error);
        console.error('Error stack:', error.stack);

        let errorMsg = error.message || 'Unknown error occurred';

        if (errorMsg.includes('No outdoor activities found') || errorMsg.includes('No suitable activities')) {
            errorMsg = `No outdoor activities found near ${city}, ${state}.\n\nSuggestions:\n• Try a larger nearby city\n• Search for a major city in ${state}\n• Try a different state`;
        } else if (errorMsg.includes('Could not find') || errorMsg.includes('Location not found')) {
            errorMsg = `Could not locate "${city}, ${state}".\n\nPlease check:\n• City name spelling\n• State selection is correct\n• Try the nearest major city`;
        } else if (errorMsg.includes('API returned') || errorMsg.includes('fetch')) {
            errorMsg = `Connection issue while searching.\n\nPlease:\n• Check your internet connection\n• Try again in a moment\n• The mapping service may be temporarily busy`;
        }

        alert(errorMsg);
        showPage('landing-page');
    }
}

// ====== COMMUNITY FEATURES ======

// Community state
let userProfile = JSON.parse(localStorage.getItem('outset_user_profile') || 'null');
let groupActivities = JSON.parse(localStorage.getItem('outset_group_activities') || '[]');
let demoUsers = []; // Sample users for demonstration

// Initialize demo users for the community
function initDemoUsers() {
    const names = ['Alex Chen', 'Jordan Smith', 'Sam Taylor', 'Casey Rivera', 'Morgan Lee', 'Jamie Park', 'Riley Cooper', 'Drew Martinez'];
    const bios = [
        'Love hiking and outdoor photography',
        'Rock climbing enthusiast, always looking for new routes',
        'Weekend warrior seeking adventure',
        'Camping and backpacking fanatic',
        'Trail running and mountain biking',
        'Kayaking every chance I get',
        'Ski season is my favorite season',
        'Nature lover and bird watcher'
    ];
    const activityTypes = Object.keys(ACTIVITY_TYPES);

    demoUsers = names.map((name, idx) => ({
        id: `user-${idx}`,
        name: name,
        bio: bios[idx],
        interests: activityTypes.slice(idx * 3, idx * 3 + 3).concat(activityTypes.slice(idx * 5, idx * 5 + 2)),
        joinedGroups: []
    }));
}

// Check if user has profile
function checkUserProfile() {
    const profileSetup = document.getElementById('profile-setup');
    const communityContent = document.getElementById('community-content');

    if (!userProfile && profileSetup && communityContent) {
        profileSetup.style.display = 'block';
        communityContent.style.display = 'none';
    } else if (profileSetup && communityContent) {
        profileSetup.style.display = 'none';
        communityContent.style.display = 'block';
    }
}

// Render interest selector for profile setup
function renderInterestSelector() {
    const container = document.getElementById('interest-selector');
    if (!container) return;

    const interests = [
        'hiking', 'biking', 'kayaking', 'climbing', 'camping',
        'skiing', 'surfing', 'fishing', 'photography', 'yoga',
        'fitness', 'parks', 'trails', 'water'
    ];

    container.innerHTML = interests.map(interest => {
        const typeData = ACTIVITY_TYPES[interest];
        const label = typeData ? typeData.label : interest;
        return `<div class="interest-tag" data-interest="${interest}">${label}</div>`;
    }).join('');

    // Add click handlers
    container.querySelectorAll('.interest-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('selected');
        });
    });
}

// Save user profile
function saveUserProfile() {
    const name = document.getElementById('profile-name').value.trim();
    const bio = document.getElementById('profile-bio').value.trim();

    if (!name) {
        alert('Please enter your name');
        return;
    }

    const selectedInterests = Array.from(document.querySelectorAll('.interest-tag.selected'))
        .map(tag => tag.dataset.interest);

    userProfile = {
        id: 'user-me',
        name: name,
        bio: bio || 'Outdoor enthusiast',
        interests: selectedInterests,
        createdAt: new Date().toISOString()
    };

    localStorage.setItem('outset_user_profile', JSON.stringify(userProfile));

    checkUserProfile();
    displayUserProfile();
    showToast('Profile created successfully!');
}

// Display user profile
function displayUserProfile() {
    const container = document.getElementById('profile-display');
    if (!container || !userProfile) return;

    const initials = userProfile.name.split(' ').map(n => n[0]).join('').toUpperCase();

    const interestsHTML = userProfile.interests.map(interest => {
        const typeData = ACTIVITY_TYPES[interest];
        const label = typeData ? typeData.label : interest;
        return `<span class="interest-badge">${label}</span>`;
    }).join('');

    container.innerHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-avatar">${initials}</div>
                <div class="profile-name">${userProfile.name}</div>
                <div class="profile-bio">${userProfile.bio}</div>
            </div>
            <div class="profile-section">
                <h3>My Interests</h3>
                <div class="user-interests">
                    ${interestsHTML}
                </div>
            </div>
            <div class="profile-section">
                <h3>My Stats</h3>
                <div class="group-details">
                    <div class="group-detail">
                        <span class="group-detail-icon">📅</span>
                        <span>${schedule.length} activities scheduled</span>
                    </div>
                    <div class="group-detail">
                        <span class="group-detail-icon">👥</span>
                        <span>${groupActivities.filter(g => g.participants.includes(userProfile.id)).length} group activities joined</span>
                    </div>
                </div>
            </div>
            <button class="primary-btn edit-profile-btn" onclick="editProfile()">Edit Profile</button>
        </div>
    `;
}

// Edit profile
window.editProfile = function() {
    const profileSetup = document.getElementById('profile-setup');
    const communityContent = document.getElementById('community-content');

    if (profileSetup && communityContent) {
        // Pre-fill form
        document.getElementById('profile-name').value = userProfile.name;
        document.getElementById('profile-bio').value = userProfile.bio;

        // Pre-select interests
        setTimeout(() => {
            document.querySelectorAll('.interest-tag').forEach(tag => {
                if (userProfile.interests.includes(tag.dataset.interest)) {
                    tag.classList.add('selected');
                }
            });
        }, 100);

        profileSetup.style.display = 'block';
        communityContent.style.display = 'none';
    }
};

// Display group activities
function displayGroupActivities() {
    const container = document.getElementById('group-activities-list');
    const empty = document.getElementById('empty-groups');

    if (!container || !empty) return;

    if (groupActivities.length === 0) {
        container.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    const html = groupActivities.map(group => {
        const isHost = group.hostId === (userProfile?.id || '');
        const hasJoined = group.participants.includes(userProfile?.id || '');
        const spots = group.maxParticipants - group.participants.length;
        const dateObj = new Date(group.datetime);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const formattedTime = dateObj.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });

        const participantAvatars = group.participants.slice(0, 5).map(pId => {
            const participant = pId === userProfile?.id ? userProfile :
                               demoUsers.find(u => u.id === pId);
            const initial = participant?.name[0] || '?';
            return `<div class="participant-avatar">${initial}</div>`;
        }).join('');

        return `
            <div class="group-card">
                <div class="group-header">
                    <div>
                        <div class="group-title">${group.name}</div>
                        <div class="group-host">Hosted by ${group.hostName}${isHost ? ' (You)' : ''}</div>
                    </div>
                    <div class="group-badge">${ACTIVITY_TYPES[group.type]?.label || group.type}</div>
                </div>

                <div class="group-description">${group.description}</div>

                <div class="group-details">
                    <div class="group-detail">
                        <span class="group-detail-icon">📅</span>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="group-detail">
                        <span class="group-detail-icon">🕐</span>
                        <span>${formattedTime}</span>
                    </div>
                    <div class="group-detail">
                        <span class="group-detail-icon">📊</span>
                        <span>${group.difficulty}</span>
                    </div>
                    <div class="group-detail">
                        <span class="group-detail-icon">👥</span>
                        <span>${spots} ${spots === 1 ? 'spot' : 'spots'} left</span>
                    </div>
                </div>

                <div class="group-participants">
                    <div class="participant-avatars">
                        ${participantAvatars}
                    </div>
                    <span class="participant-count">${group.participants.length} / ${group.maxParticipants} participants</span>
                </div>

                <div class="group-footer">
                    <div></div>
                    ${hasJoined ?
                        `<button class="join-btn joined">Joined</button>` :
                        spots > 0 ?
                            `<button class="join-btn" onclick="joinGroupActivity('${group.id}')">Join Activity</button>` :
                            `<button class="join-btn joined">Full</button>`
                    }
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Join group activity
window.joinGroupActivity = function(groupId) {
    if (!userProfile) {
        alert('Please create a profile first');
        return;
    }

    const group = groupActivities.find(g => g.id === groupId);
    if (!group) return;

    if (group.participants.includes(userProfile.id)) {
        showToast('You already joined this activity');
        return;
    }

    if (group.participants.length >= group.maxParticipants) {
        showToast('This activity is full');
        return;
    }

    group.participants.push(userProfile.id);
    localStorage.setItem('outset_group_activities', JSON.stringify(groupActivities));

    displayGroupActivities();
    showToast(`Joined "${group.name}"!`);
};

// Create group activity
function createGroupActivity() {
    if (!userProfile) {
        alert('Please create a profile first');
        return;
    }

    const name = document.getElementById('group-activity-name').value.trim();
    const description = document.getElementById('group-activity-desc').value.trim();
    const datetime = document.getElementById('group-activity-datetime').value;
    const maxParticipants = parseInt(document.getElementById('group-activity-max').value);
    const type = document.getElementById('group-activity-type').value;
    const difficulty = document.getElementById('group-activity-difficulty').value;

    if (!name || !description || !datetime) {
        alert('Please fill in all required fields');
        return;
    }

    const newGroup = {
        id: `group-${Date.now()}`,
        name: name,
        description: description,
        datetime: datetime,
        maxParticipants: maxParticipants,
        type: type,
        difficulty: difficulty,
        hostId: userProfile.id,
        hostName: userProfile.name,
        participants: [userProfile.id],
        createdAt: new Date().toISOString()
    };

    groupActivities.unshift(newGroup);
    localStorage.setItem('outset_group_activities', JSON.stringify(groupActivities));

    closeGroupModal();
    displayGroupActivities();
    showToast('Group activity created!');
}

// Display nearby users
function displayNearbyUsers() {
    const container = document.getElementById('users-list');
    const empty = document.getElementById('empty-users');

    if (!container || !empty) return;

    if (!userLocation || demoUsers.length === 0) {
        container.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    const html = demoUsers.map(user => {
        const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
        const interestsHTML = user.interests.slice(0, 4).map(interest => {
            const typeData = ACTIVITY_TYPES[interest];
            const label = typeData ? typeData.label : interest;
            return `<span class="interest-badge">${label}</span>`;
        }).join('');

        return `
            <div class="user-card">
                <div class="user-avatar">${initials}</div>
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-bio">${user.bio}</div>
                    <div class="user-interests">${interestsHTML}</div>
                </div>
                <div class="user-actions">
                    <button class="connect-btn" onclick="connectWithUser('${user.id}')">Connect</button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Connect with user
window.connectWithUser = function(userId) {
    const user = demoUsers.find(u => u.id === userId);
    if (user) {
        showToast(`Connection request sent to ${user.name}!`);
    }
};

// Tab switching
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`)?.classList.add('active');

    // Load content based on tab
    if (tabName === 'group-activities') {
        displayGroupActivities();
    } else if (tabName === 'nearby-users') {
        displayNearbyUsers();
    } else if (tabName === 'my-profile') {
        displayUserProfile();
    }
}

// Modal functions
function openGroupModal() {
    const modal = document.getElementById('group-modal');
    if (modal) {
        modal.classList.add('active');

        // Set default datetime to tomorrow at 10 AM
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(10, 0, 0, 0);
        const datetimeStr = tomorrow.toISOString().slice(0, 16);
        document.getElementById('group-activity-datetime').value = datetimeStr;
    }
}

function closeGroupModal() {
    const modal = document.getElementById('group-modal');
    if (modal) {
        modal.classList.remove('active');

        // Clear form
        document.getElementById('group-activity-name').value = '';
        document.getElementById('group-activity-desc').value = '';
        document.getElementById('group-activity-datetime').value = '';
        document.getElementById('group-activity-max').value = '8';
        document.getElementById('group-activity-type').value = 'hiking';
        document.getElementById('group-activity-difficulty').value = 'beginner';
    }
}

// Initialize
function init() {
    console.log('=== Outset App Initializing ===');

    // Search button
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        console.log('✓ Search button found, attaching listener');
        searchBtn.addEventListener('click', () => {
            console.log('Search button clicked!');
            search();
        });
    } else {
        console.error('❌ Search button not found!');
    }

    // Enter key
    const cityInput = document.getElementById('city-input');
    const stateInput = document.getElementById('state-input');

    if (cityInput) {
        console.log('✓ City input found');
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log('Enter pressed in city input');
                search();
            }
        });
    } else {
        console.error('❌ City input not found!');
    }

    if (stateInput) {
        console.log('✓ State input found');
        stateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log('Enter pressed in state input');
                search();
            }
        });
    } else {
        console.error('❌ State input not found!');
    }

    // Duration filters
    document.querySelectorAll('.duration-filter').forEach(cb => {
        cb.addEventListener('change', (e) => {
            console.log(`Duration filter changed: ${e.target.value} = ${e.target.checked}`);
            if (e.target.checked) {
                activeFilters.durations.add(e.target.value);
            } else {
                activeFilters.durations.delete(e.target.value);
            }
            applyFilters();
        });
    });

    // Difficulty filters
    document.querySelectorAll('.difficulty-filter').forEach(cb => {
        cb.addEventListener('change', (e) => {
            console.log(`Difficulty filter changed: ${e.target.value} = ${e.target.checked}`);
            if (e.target.checked) {
                activeFilters.difficulties.add(e.target.value);
            } else {
                activeFilters.difficulties.delete(e.target.value);
            }
            applyFilters();
        });
    });

    // Cost filters
    document.querySelectorAll('.cost-filter').forEach(cb => {
        cb.addEventListener('change', (e) => {
            console.log(`Cost filter changed: ${e.target.value} = ${e.target.checked}`);
            if (e.target.checked) {
                activeFilters.costs.add(e.target.value);
            } else {
                activeFilters.costs.delete(e.target.value);
            }
            applyFilters();
        });
    });

    // Clear filters
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            activeFilters = { types: new Set(), durations: new Set(), difficulties: new Set(), costs: new Set() };
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            applyFilters();
        });
    }

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

    // Add scroll detection to filters sidebar
    const filtersSidebar = document.querySelector('.filters-sidebar');
    if (filtersSidebar) {
        const updateScrollState = () => {
            const sidebar = document.querySelector('.filters-sidebar');
            if (!sidebar) return;

            // Check if scrolled from top
            if (sidebar.scrollTop > 10) {
                sidebar.classList.add('scrolled');
            } else {
                sidebar.classList.remove('scrolled');
            }

            // Check if there's more content to scroll
            const hasMore = sidebar.scrollHeight > sidebar.clientHeight + sidebar.scrollTop + 10;
            if (hasMore) {
                sidebar.classList.add('has-more');
            } else {
                sidebar.classList.remove('has-more');
            }
        };

        // Make it globally accessible
        window.updateFilterScrollState = updateScrollState;

        filtersSidebar.addEventListener('scroll', updateScrollState);

        // Check on initial load and when filters change
        updateScrollState();

        // Re-check when window resizes
        window.addEventListener('resize', updateScrollState);
    }

    // Community navigation
    const communityNav = document.getElementById('nav-community');
    const communityNavSchedule = document.getElementById('nav-community-from-schedule');
    const communityNavActivity = document.getElementById('nav-activities-from-community');
    const communityNavScheduleFromCommunity = document.getElementById('nav-schedule-from-community');

    if (communityNav) {
        communityNav.addEventListener('click', (e) => {
            e.preventDefault();
            initDemoUsers();
            checkUserProfile();
            renderInterestSelector();
            showPage('community-page');
        });
    }

    if (communityNavSchedule) {
        communityNavSchedule.addEventListener('click', (e) => {
            e.preventDefault();
            initDemoUsers();
            checkUserProfile();
            renderInterestSelector();
            showPage('community-page');
        });
    }

    if (communityNavActivity) {
        communityNavActivity.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('activities-page');
        });
    }

    if (communityNavScheduleFromCommunity) {
        communityNavScheduleFromCommunity.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('schedule-page');
            showSchedule();
        });
    }

    // Profile save button
    const saveProfileBtn = document.getElementById('save-profile');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', saveUserProfile);
    }

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    // Create group activity button
    const createGroupBtn = document.getElementById('create-group-activity');
    if (createGroupBtn) {
        createGroupBtn.addEventListener('click', openGroupModal);
    }

    // Modal buttons
    const closeModalBtn = document.getElementById('close-group-modal');
    const cancelGroupBtn = document.getElementById('cancel-group');
    const submitGroupBtn = document.getElementById('submit-group');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeGroupModal);
    }

    if (cancelGroupBtn) {
        cancelGroupBtn.addEventListener('click', closeGroupModal);
    }

    if (submitGroupBtn) {
        submitGroupBtn.addEventListener('click', createGroupActivity);
    }

    // Close modal on background click
    const groupModal = document.getElementById('group-modal');
    if (groupModal) {
        groupModal.addEventListener('click', (e) => {
            if (e.target === groupModal) {
                closeGroupModal();
            }
        });
    }

    // Close schedule modal on background click
    const scheduleModal = document.getElementById('schedule-modal');
    if (scheduleModal) {
        scheduleModal.addEventListener('click', (e) => {
            if (e.target === scheduleModal) {
                closeScheduleModal();
            }
        });
    }

    // Initialize demo users
    initDemoUsers();

    console.log('=== App Initialized Successfully ===');
    console.log('Ready to search! Enter a city and state, then click "Search Activities"');

    // Initialize newsletter banner and landing page signup
    initNewsletter();
    initLandingNewsletter();
}

// ============================================
// NEWSLETTER / MAILCHIMP INTEGRATION
// ============================================

function initNewsletter() {
    const newsletterFooter = document.getElementById('newsletter-footer');
    const closeBtn = document.getElementById('close-newsletter');
    const form = document.getElementById('mc-embedded-subscribe-form');

    if (!newsletterFooter) return;

    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem('newsletter_dismissed');

    // Show newsletter banner after 5 seconds if not dismissed
    if (!dismissed) {
        setTimeout(() => {
            newsletterFooter.style.display = 'block';
        }, 5000); // 5 seconds delay
    }

    // Handle close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            newsletterFooter.style.display = 'none';
            localStorage.setItem('newsletter_dismissed', 'true');
        });
    }

    // Handle form submission
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('newsletter-email').value;

            if (!email) {
                showToast('Please enter a valid email address');
                return;
            }

            // Mailchimp form action URL
            const MAILCHIMP_FORM_ACTION = 'https://app.us7.list-manage.com/subscribe/post?u=afca0485209218658cbbdc06b&id=3acc426a0c&f_id=00ae8ce0f0';

            try {
                // Submit to Mailchimp
                const formData = new FormData();
                formData.append('EMAIL', email);
                formData.append('b_afca0485209218658cbbdc06b_3acc426a0c', ''); // Honeypot field

                // Send to Mailchimp (no-cors mode since Mailchimp doesn't support CORS)
                await fetch(MAILCHIMP_FORM_ACTION, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });

                // Also store locally as backup
                const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                }

                // Show success message
                showToast('Thanks for subscribing! 🎉');
                newsletterFooter.style.display = 'none';
                localStorage.setItem('newsletter_dismissed', 'true');

                // Track event with Umami if available
                if (window.umami) {
                    window.umami.track('newsletter-signup', { email: email.split('@')[1] }); // Only track domain for privacy
                }

            } catch (error) {
                console.error('Newsletter signup error:', error);
                showToast('Something went wrong. Please try again.');
            }
        });
    }
}

// Handle landing page newsletter form
function initLandingNewsletter() {
    const landingForm = document.getElementById('landing-newsletter-form');

    if (!landingForm) return;

    landingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('landing-newsletter-email').value;

        if (!email) {
            showToast('Please enter a valid email address');
            return;
        }

        // Mailchimp form action URL
        const MAILCHIMP_FORM_ACTION = 'https://app.us7.list-manage.com/subscribe/post?u=afca0485209218658cbbdc06b&id=3acc426a0c&f_id=00ae8ce0f0';

        try {
            // Submit to Mailchimp
            const formData = new FormData();
            formData.append('EMAIL', email);
            formData.append('b_afca0485209218658cbbdc06b_3acc426a0c', ''); // Honeypot field

            // Send to Mailchimp
            await fetch(MAILCHIMP_FORM_ACTION, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            // Store locally as backup
            const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
            }

            // Show success message
            showToast('Thanks for subscribing! 🎉');
            document.getElementById('landing-newsletter-email').value = '';
            localStorage.setItem('newsletter_dismissed', 'true');

            // Track event with Umami if available
            if (window.umami) {
                window.umami.track('newsletter-signup', { email: email.split('@')[1] });
            }

        } catch (error) {
            console.error('Newsletter signup error:', error);
            showToast('Something went wrong. Please try again.');
        }
    });
}

// Track custom events for analytics
window.trackEvent = function(eventName, eventData = {}) {
    // Umami tracking
    if (window.umami) {
        window.umami.track(eventName, eventData);
    }

    // Mailchimp events (if using Mailchimp's JavaScript SDK)
    if (window.dojoRequire && window.dojoRequire(['mojo/signup-forms/Loader'])) {
        // Mailchimp tracking available
        console.log('Mailchimp event:', eventName, eventData);
    }

    console.log('Event tracked:', eventName, eventData);
};

// Start
console.log('Document ready state:', document.readyState);
if (document.readyState === 'loading') {
    console.log('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired!');
        init();
    });
} else {
    console.log('DOM already loaded, initializing now...');
    init();
}
