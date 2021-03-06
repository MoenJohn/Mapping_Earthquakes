// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (Over the USA).
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Create the tile layer that will be the background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

// Add 'graymap' tile layer to map.
streets.addTo(map);

// Create map obect witha  center and v


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a circle to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color:"black",
    fillColor: '#ffffa1'
 }).addTo(map);