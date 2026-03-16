// Activity templates - will be dynamically generated based on user location
const activityTemplates = {
    hiking: [
        { name: "Sunset Trail Hike", description: "Easy hike with stunning sunset views. Perfect for beginners looking to explore nature.", difficulty: "beginner", duration: "2 hours" },
        { name: "Waterfall Trail Adventure", description: "Moderate hike to a beautiful waterfall. Some uphill sections but totally worth it!", difficulty: "intermediate", duration: "3 hours" },
        { name: "Mountain Summit Hike", description: "Challenging hike with rewarding panoramic views at the top.", difficulty: "intermediate", duration: "4 hours" },
        { name: "Nature Loop Walk", description: "Gentle nature walk through scenic landscapes. Great for all fitness levels.", difficulty: "beginner", duration: "1.5 hours" },
        { name: "Canyon Ridge Trail", description: "Explore dramatic canyon views on this moderate trail.", difficulty: "intermediate", duration: "2.5 hours" }
    ],
    climbing: [
        { name: "Beginner Rock Climbing", description: "Intro to rock climbing class. All equipment provided. No experience needed!", difficulty: "beginner", duration: "1.5 hours" },
        { name: "Bouldering Meetup", description: "Casual bouldering session. Great for meeting other climbers and trying new routes.", difficulty: "intermediate", duration: "2 hours" },
        { name: "Indoor Climbing Basics", description: "Learn the fundamentals in a safe indoor environment.", difficulty: "beginner", duration: "2 hours" },
        { name: "Advanced Rope Techniques", description: "Master advanced climbing techniques with expert instruction.", difficulty: "intermediate", duration: "3 hours" }
    ],
    biking: [
        { name: "Riverside Bike Path", description: "Casual group bike ride along scenic paths. Bring your own bike or rent one nearby.", difficulty: "beginner", duration: "1 hour" },
        { name: "Mountain Bike Skills", description: "Learn mountain biking basics on beginner-friendly trails. Bikes available to rent.", difficulty: "beginner", duration: "2 hours" },
        { name: "Trail Riding Adventure", description: "Intermediate trail ride through varied terrain.", difficulty: "intermediate", duration: "2.5 hours" },
        { name: "Urban Bike Tour", description: "Explore the city on two wheels with a guided group ride.", difficulty: "beginner", duration: "1.5 hours" }
    ],
    yoga: [
        { name: "Outdoor Yoga Flow", description: "Relaxing outdoor yoga session in beautiful surroundings. All levels welcome. Bring your own mat!", difficulty: "beginner", duration: "1 hour" },
        { name: "Sunset Yoga & Meditation", description: "Wind down with yoga as the sun sets. Peaceful vibes and amazing views.", difficulty: "beginner", duration: "1.5 hours" },
        { name: "Sunrise Yoga Session", description: "Start your day with energizing yoga at dawn.", difficulty: "beginner", duration: "1 hour" },
        { name: "Power Yoga Outdoors", description: "Challenging vinyasa flow in nature. Build strength and flexibility.", difficulty: "intermediate", duration: "1.5 hours" }
    ],
    kayaking: [
        { name: "Kayaking Basics", description: "Learn to kayak on calm waters. Equipment and instruction included.", difficulty: "beginner", duration: "2 hours" },
        { name: "Sunset Paddleboarding", description: "Paddleboard on calm waters during sunset. Magical experience for all skill levels.", difficulty: "beginner", duration: "1.5 hours" },
        { name: "River Kayaking Tour", description: "Guided tour through scenic waterways.", difficulty: "intermediate", duration: "3 hours" },
        { name: "Stand-Up Paddleboard Yoga", description: "Combine SUP with yoga for a unique water workout.", difficulty: "intermediate", duration: "1.5 hours" }
    ],
    running: [
        { name: "Social Running Group", description: "Friendly running group for all paces. Great way to meet people!", difficulty: "beginner", duration: "45 minutes" },
        { name: "Outdoor Bootcamp", description: "Fun outdoor workout combining cardio and strength. Energetic and supportive group!", difficulty: "intermediate", duration: "1 hour" },
        { name: "Trail Running Basics", description: "Learn trail running techniques on moderate terrain.", difficulty: "intermediate", duration: "1.5 hours" },
        { name: "Morning Run Club", description: "Start your day with an energizing group run.", difficulty: "beginner", duration: "45 minutes" }
    ],
    skiing: [
        { name: "Beginner Ski Lessons", description: "Learn to ski with patient instructors. Equipment rental included.", difficulty: "beginner", duration: "3 hours" },
        { name: "Intermediate Ski Clinic", description: "Improve your technique on blue runs with expert coaching.", difficulty: "intermediate", duration: "2.5 hours" },
        { name: "Backcountry Ski Tour", description: "Explore pristine powder away from the crowds. Avalanche safety included.", difficulty: "intermediate", duration: "4 hours" },
        { name: "Ski Racing Fundamentals", description: "Learn proper racing form and gates.", difficulty: "intermediate", duration: "2 hours" }
    ],
    snowboarding: [
        { name: "Snowboarding 101", description: "Never snowboarded? No problem! Learn the basics in a fun, supportive environment.", difficulty: "beginner", duration: "3 hours" },
        { name: "Freestyle Snowboard Camp", description: "Learn tricks in the terrain park with certified instructors.", difficulty: "intermediate", duration: "2.5 hours" },
        { name: "All-Mountain Riding", description: "Explore the whole mountain and master varied terrain.", difficulty: "intermediate", duration: "3 hours" },
        { name: "Women's Snowboard Clinic", description: "Female-focused instruction in a supportive environment.", difficulty: "beginner", duration: "2.5 hours" }
    ],
    surfing: [
        { name: "Surf Lessons for Beginners", description: "Learn to catch your first waves with expert instructors. Wetsuit and board included.", difficulty: "beginner", duration: "2 hours" },
        { name: "Intermediate Surf Coaching", description: "Improve your technique and tackle bigger waves.", difficulty: "intermediate", duration: "2.5 hours" },
        { name: "Dawn Patrol Surf Session", description: "Catch the best waves of the day at sunrise.", difficulty: "intermediate", duration: "2 hours" },
        { name: "Longboard Cruising", description: "Mellow session focusing on style and flow.", difficulty: "beginner", duration: "1.5 hours" }
    ],
    camping: [
        { name: "Intro to Camping", description: "Learn camping basics on a guided overnight trip. All gear provided.", difficulty: "beginner", duration: "1 day" },
        { name: "Backpacking Weekend", description: "Multi-day backpacking adventure in beautiful wilderness.", difficulty: "intermediate", duration: "2 days" },
        { name: "Car Camping Meetup", description: "Social camping experience at an established campground.", difficulty: "beginner", duration: "1 day" },
        { name: "Wilderness Skills Workshop", description: "Learn navigation, fire-building, and outdoor survival.", difficulty: "intermediate", duration: "1 day" }
    ],
    fishing: [
        { name: "Fly Fishing Basics", description: "Learn casting and techniques on a scenic river.", difficulty: "beginner", duration: "3 hours" },
        { name: "Lake Fishing Charter", description: "Guided fishing trip with all equipment provided.", difficulty: "beginner", duration: "4 hours" },
        { name: "Saltwater Fishing", description: "Try your luck fishing in coastal waters.", difficulty: "beginner", duration: "3.5 hours" },
        { name: "Advanced Fly Tying", description: "Master the art of creating your own flies.", difficulty: "intermediate", duration: "2 hours" }
    ],
    photography: [
        { name: "Outdoor Photography Walk", description: "Learn landscape photography while exploring nature.", difficulty: "beginner", duration: "2 hours" },
        { name: "Sunrise Photography Tour", description: "Capture stunning golden hour shots with a pro photographer.", difficulty: "beginner", duration: "2.5 hours" },
        { name: "Wildlife Photography Workshop", description: "Learn techniques for photographing animals in nature.", difficulty: "intermediate", duration: "3 hours" },
        { name: "Night Sky Photography", description: "Master long exposure and star photography.", difficulty: "intermediate", duration: "3 hours" }
    ],
    horseback: [
        { name: "Beginner Horseback Trail Ride", description: "Scenic trail ride perfect for first-timers. Gentle horses and expert guides.", difficulty: "beginner", duration: "1.5 hours" },
        { name: "Sunset Horse Ride", description: "Magical evening ride through beautiful landscapes.", difficulty: "beginner", duration: "2 hours" },
        { name: "Advanced Trail Riding", description: "Fast-paced ride for experienced riders.", difficulty: "intermediate", duration: "2.5 hours" },
        { name: "Horse Care & Riding Combo", description: "Learn grooming and basic care before your ride.", difficulty: "beginner", duration: "2 hours" }
    ],
    zipline: [
        { name: "Zipline Canopy Tour", description: "Fly through the treetops on an exhilarating zipline course.", difficulty: "beginner", duration: "2 hours" },
        { name: "Extreme Zipline Adventure", description: "Longer, faster lines for thrill-seekers.", difficulty: "intermediate", duration: "3 hours" },
        { name: "Night Zipline Experience", description: "Unique after-dark zipline adventure.", difficulty: "beginner", duration: "2 hours" }
    ],
    rafting: [
        { name: "Whitewater Rafting - Class II", description: "Gentle rapids perfect for beginners and families.", difficulty: "beginner", duration: "3 hours" },
        { name: "Whitewater Rafting - Class III", description: "More exciting rapids for adventure seekers.", difficulty: "intermediate", duration: "4 hours" },
        { name: "Scenic Float Trip", description: "Relaxing river float through beautiful scenery.", difficulty: "beginner", duration: "2.5 hours" }
    ],
    skateboarding: [
        { name: "Skateboard Basics", description: "Learn to ride and do basic tricks at the skatepark.", difficulty: "beginner", duration: "1.5 hours" },
        { name: "Street Skating Skills", description: "Master curbs, ledges, and street obstacles.", difficulty: "intermediate", duration: "2 hours" },
        { name: "Skate Park Session", description: "Guided session at local skate parks.", difficulty: "beginner", duration: "2 hours" }
    ]
};

// Activity type metadata
const activityMetadata = {
    hiking: { icon: "🥾", label: "Hiking" },
    climbing: { icon: "🧗", label: "Climbing" },
    biking: { icon: "🚴", label: "Biking" },
    yoga: { icon: "🧘", label: "Yoga" },
    kayaking: { icon: "🛶", label: "Kayaking" },
    running: { icon: "🏃", label: "Running" },
    skiing: { icon: "⛷️", label: "Skiing" },
    snowboarding: { icon: "🏂", label: "Snowboarding" },
    surfing: { icon: "🏄", label: "Surfing" },
    camping: { icon: "⛺", label: "Camping" },
    fishing: { icon: "🎣", label: "Fishing" },
    photography: { icon: "📷", label: "Photography" },
    horseback: { icon: "🐴", label: "Horseback Riding" },
    zipline: { icon: "🪂", label: "Ziplining" },
    rafting: { icon: "🚣", label: "Rafting" },
    skateboarding: { icon: "🛹", label: "Skateboarding" }
};

// Location names by type
const locationNames = {
    hiking: ["Mountain Trail", "Forest Path", "Canyon Trail", "Ridge Walk", "Summit Path", "Valley Trail", "Scenic Loop"],
    climbing: ["Climbing Gym", "Boulder House", "Rock Wall Center", "Vertical Adventures", "Peak Climbing"],
    biking: ["Bike Trail", "Cycling Path", "Mountain Bike Park", "River Path", "Urban Trail"],
    yoga: ["Park Lawn", "Beach", "Hilltop", "Garden", "Lakeside", "Rooftop"],
    kayaking: ["Lake", "River", "Bay", "Reservoir", "Marina"],
    running: ["Track", "Park", "Trail", "Fitness Center", "Community Field"],
    skiing: ["Ski Resort", "Mountain", "Ski Area", "Alpine Center"],
    snowboarding: ["Snowboard Park", "Mountain Resort", "Terrain Park"],
    surfing: ["Beach", "Surf Spot", "Coastline", "Bay"],
    camping: ["Campground", "State Park", "National Forest", "Wilderness Area"],
    fishing: ["Lake", "River", "Fishing Spot", "Marina", "Reservoir"],
    photography: ["Scenic Overlook", "Nature Reserve", "Park", "Viewpoint"],
    horseback: ["Ranch", "Stables", "Riding Center", "Equestrian Center"],
    zipline: ["Adventure Park", "Canopy Tour", "Zipline Course"],
    rafting: ["River", "Whitewater Center", "Rapids"],
    skateboarding: ["Skate Park", "Urban Plaza", "Skate Center"]
};

// Generated activities based on location
let activitiesData = [];

// State management
let userLocation = { lat: null, lng: null, name: "Unknown", city: "", state: "", country: "" };
let currentFilters = {
    distance: 10,
    activityTypes: new Set(Object.keys(activityMetadata)),
    timeFilters: new Set(),
    experienceLevel: "all"
};
let scheduledActivities = JSON.parse(localStorage.getItem('scheduledActivities')) || [];
let currentActivityId = null;

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

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

// Reverse geocode to get location name
async function reverseGeocode(lat, lng) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`,
            { headers: { 'User-Agent': 'Outset-App' } }
        );
        const data = await response.json();

        const city = data.address.city || data.address.town || data.address.village || data.address.county || "";
        const state = data.address.state || "";
        const country = data.address.country || "";

        let displayName = "";
        if (city && state) {
            displayName = `${city}, ${state}`;
        } else if (city) {
            displayName = city;
        } else if (state) {
            displayName = state;
        } else {
            displayName = country;
        }

        return {
            name: displayName,
            city: city,
            state: state,
            country: country,
            full: data.display_name
        };
    } catch (error) {
        console.error("Geocoding error:", error);
        return {
            name: "Your Location",
            city: "",
            state: "",
            country: "",
            full: ""
        };
    }
}

// Get user location
async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    userLocation.lat = position.coords.latitude;
                    userLocation.lng = position.coords.longitude;

                    // Get location name from coordinates
                    const locationInfo = await reverseGeocode(userLocation.lat, userLocation.lng);
                    userLocation.name = locationInfo.name;
                    userLocation.city = locationInfo.city;
                    userLocation.state = locationInfo.state;
                    userLocation.country = locationInfo.country;

                    console.log("User location:", userLocation);
                    resolve(userLocation);
                },
                async error => {
                    console.error("Geolocation error:", error);
                    // Fallback to San Francisco
                    userLocation = {
                        lat: 37.7749,
                        lng: -122.4194,
                        name: "San Francisco, CA",
                        city: "San Francisco",
                        state: "California",
                        country: "United States"
                    };
                    resolve(userLocation);
                }
            );
        } else {
            // Fallback for browsers without geolocation
            userLocation = {
                lat: 37.7749,
                lng: -122.4194,
                name: "San Francisco, CA",
                city: "San Francisco",
                state: "California",
                country: "United States"
            };
            resolve(userLocation);
        }
    });
}

// Determine which activities are appropriate for the location
function getLocationAppropriateActivities(lat, lng, city, state) {
    const activities = {
        // Always available
        always: ["hiking", "running", "biking", "yoga", "climbing", "photography", "skateboarding"],
        // Conditional activities
        conditional: []
    };

    // Water activities (if near coast, lakes, rivers)
    const locationLower = (city + " " + state).toLowerCase();

    // Coastal areas get surfing
    const coastalRegions = ["california", "florida", "hawaii", "san diego", "miami", "santa cruz", "malibu",
                           "huntington", "newport", "laguna", "carolina", "oregon coast", "washington coast"];
    if (coastalRegions.some(r => locationLower.includes(r)) ||
        (lat > 24 && lat < 49 && (lng < -70 || lng > -125))) {
        activities.conditional.push("surfing");
    }

    // Most places have some water access
    activities.conditional.push("kayaking", "fishing");

    // Winter sports (mountainous regions, northern latitudes, or specific states)
    const winterStates = ["colorado", "utah", "vermont", "wyoming", "montana", "idaho",
                          "washington", "oregon", "california", "new hampshire", "maine",
                          "nevada", "new mexico", "alaska"];
    const hasWinterSports = winterStates.some(s => locationLower.includes(s)) ||
                           lat > 40 || // Northern latitudes
                           locationLower.includes("mountain") || locationLower.includes("alpine") ||
                           locationLower.includes("tahoe") || locationLower.includes("aspen");

    if (hasWinterSports) {
        activities.conditional.push("skiing", "snowboarding");
    }

    // Rafting (states with rivers)
    const raftingStates = ["colorado", "oregon", "washington", "montana", "idaho",
                           "california", "west virginia", "tennessee", "north carolina",
                           "utah", "wyoming", "arizona"];
    if (raftingStates.some(s => locationLower.includes(s))) {
        activities.conditional.push("rafting");
    }

    // Horseback riding (available almost everywhere except dense urban)
    if (!locationLower.includes("new york city") && !locationLower.includes("manhattan") &&
        !locationLower.includes("downtown chicago")) {
        activities.conditional.push("horseback");
    }

    // Ziplining (adventure areas)
    activities.conditional.push("zipline");

    // Camping (available almost everywhere except dense urban)
    if (!locationLower.includes("manhattan") && !locationLower.includes("downtown")) {
        activities.conditional.push("camping");
    }

    return [...activities.always, ...activities.conditional];
}

// Generate activities based on user location
function generateActivities() {
    activitiesData = [];
    let activityId = 1;

    // Determine which activity types to include
    const appropriateTypes = getLocationAppropriateActivities(
        userLocation.lat,
        userLocation.lng,
        userLocation.city,
        userLocation.state
    );

    console.log("Appropriate activities for this location:", appropriateTypes);

    // Generate activities for each appropriate type
    appropriateTypes.forEach(type => {
        const templates = activityTemplates[type];
        if (!templates) return;

        // Use 2-3 templates per type
        const numToUse = Math.min(templates.length, 2 + Math.floor(Math.random() * 2));
        const selectedTemplates = templates.sort(() => 0.5 - Math.random()).slice(0, numToUse);

        selectedTemplates.forEach(template => {
            // Generate a random distance from user
            const distance = parseFloat((Math.random() * 20 + 1).toFixed(1));

            // Calculate approximate coordinates for this activity
            const randomAngle = Math.random() * 2 * Math.PI;
            const distanceInDegrees = distance / 69; // Rough conversion
            const activityLat = userLocation.lat + (distanceInDegrees * Math.cos(randomAngle));
            const activityLng = userLocation.lng + (distanceInDegrees * Math.sin(randomAngle));

            // Pick a location name
            const locationOptions = locationNames[type];
            const locationName = locationOptions[Math.floor(Math.random() * locationOptions.length)];

            // Generate time slots
            const timeSlots = generateTimeSlots();

            // Determine schedule match
            const scheduleMatch = determineScheduleMatch(timeSlots);

            activitiesData.push({
                id: activityId++,
                name: template.name,
                type: type,
                icon: activityMetadata[type].icon,
                distance: distance,
                location: locationName,
                lat: activityLat,
                lng: activityLng,
                description: template.description,
                difficulty: template.difficulty,
                duration: template.duration,
                timeSlots: timeSlots,
                scheduleMatch: scheduleMatch
            });
        });
    });

    // Sort by distance
    activitiesData.sort((a, b) => a.distance - b.distance);
    console.log(`Generated ${activitiesData.length} activities`);
}

// Generate realistic time slots for an activity
function generateTimeSlots() {
    const slots = [];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date();

    // Generate 2-4 time slots
    const numSlots = 2 + Math.floor(Math.random() * 3);

    for (let i = 0; i < numSlots; i++) {
        // Random day in next 7 days
        const daysAhead = Math.floor(Math.random() * 7) + 1;
        const slotDate = new Date(today);
        slotDate.setDate(today.getDate() + daysAhead);

        const dayName = days[slotDate.getDay()];
        const dateStr = slotDate.toISOString().split('T')[0];

        // Random time
        const timeOptions = [
            { time: "7:00 AM - 8:00 AM", category: "morning" },
            { time: "8:00 AM - 9:30 AM", category: "morning" },
            { time: "9:00 AM - 11:00 AM", category: "morning" },
            { time: "10:00 AM - 12:00 PM", category: "morning" },
            { time: "12:00 PM - 2:00 PM", category: "afternoon" },
            { time: "2:00 PM - 4:00 PM", category: "afternoon" },
            { time: "3:00 PM - 5:00 PM", category: "afternoon" },
            { time: "5:00 PM - 6:30 PM", category: "evening" },
            { time: "6:00 PM - 7:30 PM", category: "evening" },
            { time: "6:30 PM - 8:00 PM", category: "evening" }
        ];

        const selectedTime = timeOptions[Math.floor(Math.random() * timeOptions.length)];
        const spots = Math.floor(Math.random() * 30) + 8;

        slots.push({
            day: dayName,
            time: selectedTime.time,
            date: dateStr,
            spots: spots,
            category: selectedTime.category
        });
    }

    return slots;
}

// Determine schedule match categories from time slots
function determineScheduleMatch(timeSlots) {
    const matches = new Set();

    timeSlots.forEach(slot => {
        matches.add(slot.category);
        if (slot.day === "Saturday" || slot.day === "Sunday") {
            matches.add("weekend");
        }
    });

    return Array.from(matches);
}

// Filter activities
function filterActivities() {
    let filtered = activitiesData.filter(activity => {
        // Distance filter
        if (activity.distance > currentFilters.distance) return false;

        // Activity type filter
        if (!currentFilters.activityTypes.has(activity.type)) return false;

        // Time filter
        if (currentFilters.timeFilters.size > 0) {
            const hasMatch = activity.scheduleMatch.some(match =>
                currentFilters.timeFilters.has(match)
            );
            if (!hasMatch) return false;
        }

        // Experience level filter
        if (currentFilters.experienceLevel !== "all") {
            if (activity.difficulty !== currentFilters.experienceLevel) return false;
        }

        return true;
    });

    return filtered;
}

// Render activities grid
function renderActivities() {
    const filtered = filterActivities();
    const grid = document.getElementById('activities-grid');

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h2>No activities found</h2>
                <p style="color: var(--text-light);">Try adjusting your filters to see more options</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(activity => `
        <div class="activity-card" data-id="${activity.id}">
            <div class="activity-image">${activity.icon}</div>
            <div class="activity-info">
                <span class="activity-type">${activity.type}</span>
                <h3>${activity.name}</h3>
                <div class="activity-meta">
                    <div class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${activity.distance} miles away
                    </div>
                    <div class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${activity.duration}
                    </div>
                </div>
                <p class="activity-description">${activity.description}</p>
                <div class="activity-footer">
                    <span class="difficulty-badge difficulty-${activity.difficulty}">${activity.difficulty}</span>
                    <button class="view-details-btn">View Details</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const activityId = parseInt(card.dataset.id);
            showActivityDetail(activityId);
        });
    });
}

// Show activity detail
function showActivityDetail(activityId) {
    currentActivityId = activityId;
    const activity = activitiesData.find(a => a.id === activityId);

    const detailContent = document.getElementById('activity-detail-content');
    detailContent.innerHTML = `
        <div class="detail-header">
            <div class="detail-image">${activity.icon}</div>
            <span class="activity-type">${activity.type}</span>
            <h1 class="detail-title">${activity.name}</h1>
            <div class="detail-meta">
                <div class="meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${activity.location} • ${activity.distance} miles away
                </div>
                <div class="meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    ${activity.duration}
                </div>
                <div class="meta-item">
                    <span class="difficulty-badge difficulty-${activity.difficulty}">${activity.difficulty}</span>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h2>About This Activity</h2>
            <p>${activity.description}</p>
        </div>

        <div class="schedule-section">
            <h2>Available Times</h2>
            <div class="time-slots">
                ${activity.timeSlots.map((slot, index) => {
                    const isScheduled = scheduledActivities.some(
                        s => s.activityId === activity.id && s.slotIndex === index
                    );
                    return `
                        <div class="time-slot">
                            <div class="time-slot-info">
                                <h3>${slot.day}, ${slot.date}</h3>
                                <p>${slot.time} • ${slot.spots} spots available</p>
                            </div>
                            <button class="add-to-schedule-btn ${isScheduled ? 'added' : ''}"
                                    data-slot-index="${index}"
                                    ${isScheduled ? 'disabled' : ''}>
                                ${isScheduled ? '✓ Added' : 'Add to Schedule'}
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // Add click handlers for schedule buttons
    document.querySelectorAll('.add-to-schedule-btn').forEach(btn => {
        if (!btn.disabled) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const slotIndex = parseInt(btn.dataset.slotIndex);
                addToSchedule(activityId, slotIndex);
            });
        }
    });

    showPage('activity-detail-page');
}

// Add to schedule
function addToSchedule(activityId, slotIndex) {
    const activity = activitiesData.find(a => a.id === activityId);
    const slot = activity.timeSlots[slotIndex];

    scheduledActivities.push({
        activityId,
        slotIndex,
        activity: activity,
        slot: slot
    });

    localStorage.setItem('scheduledActivities', JSON.stringify(scheduledActivities));

    // Update button
    const btn = document.querySelector(`[data-slot-index="${slotIndex}"]`);
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    btn.disabled = true;

    // Show feedback
    showNotification('Activity added to your schedule!');
}

// Remove from schedule
function removeFromSchedule(index) {
    scheduledActivities.splice(index, 1);
    localStorage.setItem('scheduledActivities', JSON.stringify(scheduledActivities));
    renderSchedule();
}

// Render schedule
function renderSchedule() {
    const container = document.getElementById('scheduled-activities');
    const emptyState = document.getElementById('empty-schedule');

    if (scheduledActivities.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        container.style.display = 'flex';
        emptyState.style.display = 'none';

        // Sort by date
        const sorted = [...scheduledActivities].sort((a, b) =>
            new Date(a.slot.date) - new Date(b.slot.date)
        );

        container.innerHTML = sorted.map((item, index) => `
            <div class="scheduled-activity-card">
                <div class="scheduled-icon">${item.activity.icon}</div>
                <div class="scheduled-info">
                    <h3>${item.activity.name}</h3>
                    <p><strong>${item.slot.day}, ${item.slot.date}</strong></p>
                    <p>${item.slot.time}</p>
                    <p>${item.activity.location}</p>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `).join('');

        // Add remove handlers
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                const actualIndex = scheduledActivities.findIndex(s =>
                    s.activityId === sorted[index].activityId &&
                    s.slotIndex === sorted[index].slotIndex
                );
                removeFromSchedule(actualIndex);
            });
        });
    }
}

// Show notification
function showNotification(message) {
    // Simple notification - could be enhanced with a toast library
    alert(message);
}

// Initialize
async function init() {
    try {
        console.log("Initializing Outset app...");

        // Get location
        console.log("Getting user location...");
        await getUserLocation();

        // Generate activities based on location
        generateActivities();

        // Update location display
        const locationElements = document.querySelectorAll('#location-text');
        console.log(`Found ${locationElements.length} location elements`);
        locationElements.forEach(el => {
            el.textContent = userLocation.name;
        });
    } catch (error) {
        console.error("Error during initialization:", error);
        // Set fallback location
        userLocation = {
            lat: 37.7749,
            lng: -122.4194,
            name: "San Francisco, CA",
            city: "San Francisco",
            state: "California",
            country: "United States"
        };
        generateActivities();
    }

    // Setup event listeners
    const getStartedBtn = document.getElementById('get-started-btn');
    if (getStartedBtn) {
        console.log("Attaching click listener to get-started button");
        getStartedBtn.addEventListener('click', async () => {
            try {
                console.log("Get started clicked, refreshing location...");
                await getUserLocation();
                generateActivities();

                const locationElements = document.querySelectorAll('#location-text');
                locationElements.forEach(el => {
                    el.textContent = userLocation.name;
                });

                console.log("Showing activities page");
                showPage('activities-page');
                renderActivities();
            } catch (error) {
                console.error("Error in get-started button handler:", error);
                // Still try to show the page
                showPage('activities-page');
                renderActivities();
            }
        });
    } else {
        console.error("get-started-btn not found!");
    }

    // Distance filter
    const distanceFilter = document.getElementById('distance-filter');
    if (distanceFilter) {
        distanceFilter.addEventListener('input', (e) => {
            currentFilters.distance = parseInt(e.target.value);
            const distanceValue = document.getElementById('distance-value');
            if (distanceValue) {
                distanceValue.textContent = e.target.value;
            }
            renderActivities();
        });
    }

    // Activity type filters
    document.querySelectorAll('.activity-type-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.activityTypes.add(e.target.value);
            } else {
                currentFilters.activityTypes.delete(e.target.value);
            }
            renderActivities();
        });
    });

    // Time filters
    document.querySelectorAll('.time-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.timeFilters.add(e.target.value);
            } else {
                currentFilters.timeFilters.delete(e.target.value);
            }
            renderActivities();
        });
    });

    // Experience filters
    document.querySelectorAll('input[name="experience"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.experienceLevel = e.target.value;
            renderActivities();
        });
    });

    // Navigation - with safety checks
    const backToActivities = document.getElementById('back-to-activities');
    if (backToActivities) {
        backToActivities.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('activities-page');
        });
    }

    const backToActivities2 = document.getElementById('back-to-activities-2');
    if (backToActivities2) {
        backToActivities2.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('activities-page');
        });
    }

    const scheduleNavLink = document.getElementById('schedule-nav-link');
    if (scheduleNavLink) {
        scheduleNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            renderSchedule();
            showPage('schedule-page');
        });
    }

    const scheduleNavLink2 = document.getElementById('schedule-nav-link-2');
    if (scheduleNavLink2) {
        scheduleNavLink2.addEventListener('click', (e) => {
            e.preventDefault();
            renderSchedule();
            showPage('schedule-page');
        });
    }

    const browseActivitiesBtn = document.getElementById('browse-activities-btn');
    if (browseActivitiesBtn) {
        browseActivitiesBtn.addEventListener('click', () => {
            showPage('activities-page');
        });
    }

    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            if (sortBy === "distance") {
                activitiesData.sort((a, b) => a.distance - b.distance);
            } else if (sortBy === "date") {
                // Sort by earliest time slot
                activitiesData.sort((a, b) => {
                    const dateA = new Date(a.timeSlots[0].date);
                    const dateB = new Date(b.timeSlots[0].date);
                    return dateA - dateB;
                });
            }
            renderActivities();
        });
    }

    console.log("All event listeners attached successfully");
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}
