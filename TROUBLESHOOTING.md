# Troubleshooting Guide for Outset

## Fixes Applied

I've fixed the following issues that were preventing the website from working:

### 1. **DOM Loading Issues**
- Added proper `DOMContentLoaded` event handling
- The script now waits for the DOM to be fully loaded before initializing

### 2. **Error Handling**
- Added try-catch blocks around async operations
- Added fallback locations if geolocation fails
- Added safety checks for all DOM element lookups

### 3. **Event Listener Safety**
- All event listeners now check if elements exist before attaching
- Added console logging to help debug any remaining issues

## How to Use the Website

1. **Open the website** - The main page should now be at `index.html`
2. **Click "Find Activities Near Me"** - This will:
   - Request your location (you must allow location access)
   - Show your city and state
   - Generate activities based on your location
   - Navigate to the activities page

3. **If location is denied** - The app will use San Francisco as a default location

## Test Pages Available

I've created several test pages to help debug:

### Main App
- File: `index.html`
- The full Outset application with all features

### Simple Test Version
- File: `test.html`
- URL: `http://localhost:8000/test.html`
- A simplified version that tests basic functionality
- Good for checking if location and API calls work

### Debug Panel
- File: `debug.html`
- URL: `http://localhost:8000/debug.html`
- Interactive debug tool that tests:
  - JavaScript loading
  - Geolocation API
  - OpenStreetMap API
  - Page navigation

## How to Check for Errors

If the website still doesn't work, open the browser console:

### Chrome/Edge:
1. Press `F12` or `Cmd+Option+I` (Mac) or `Ctrl+Shift+I` (Windows)
2. Click the "Console" tab
3. Look for any red error messages

### Safari:
1. Go to Safari > Preferences > Advanced
2. Check "Show Develop menu in menu bar"
3. Press `Cmd+Option+C` to open console
4. Look for any red error messages

### Firefox:
1. Press `F12` or `Cmd+Option+K` (Mac) or `Ctrl+Shift+K` (Windows)
2. Click the "Console" tab
3. Look for any red error messages

## Common Issues and Solutions

### Issue: Button doesn't respond when clicked
**Solution:**
- Check the browser console for errors
- Try the test page: `test.html`
- Make sure JavaScript is enabled in your browser

### Issue: "Location not allowed" or geolocation fails
**Solution:**
- The app should automatically use San Francisco as default
- Check browser settings to allow location access
- Some browsers block location on `file://` URLs - use the local server instead: `http://localhost:8000/index.html`

### Issue: No activities showing up
**Solution:**
- Open the console and check for errors
- The app generates 40-60 activities automatically
- Try adjusting the distance filter (increase it to 50 miles)
- Check if any activity type filters are unchecked

### Issue: OpenStreetMap API fails
**Solution:**
- The API has rate limits (check console for HTTP 429 errors)
- The app will still work but may show coordinates instead of city names
- Wait a minute and refresh the page

## Running with Local Server

For best results, use a local web server:

```bash
# Navigate to the outset directory
cd /Users/victoriabliley/outset

# Start Python server (should already be running)
python3 -m http.server 8000

# Open in browser
# http://localhost:8000/index.html
```

## Expected Console Output

When everything works correctly, you should see:

```
Initializing Outset app...
Getting user location...
User location: {lat: XX.XXXX, lng: -XXX.XXXX, name: "City, State", ...}
Appropriate activities for this location: ["hiking", "climbing", ...]
Generated XX activities
Found 1 location elements
Attaching click listener to get-started button
All event listeners attached successfully
```

## Still Having Issues?

If the website still doesn't work:

1. **Try the debug page** - `debug.html` - Click all test buttons to see what fails
2. **Try the test page** - `test.html` - This is a minimal working version
3. **Check the console** - Look for the first error that appears
4. **Share the error** - Copy the exact error message from the console

The console logs will show exactly where the problem is occurring.
