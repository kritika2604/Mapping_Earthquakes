// Add console.log to check to see if our code is working.
console.log("working");

//let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 11,
    accessToken: API_KEY,
    id: 'mapbox/streets-v11'
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 11,
    accessToken: API_KEY,
    id: 'mapbox/satellite-streets-v11'
});
//mapbox://styles/mapbox/satellite-streets-v11

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets" : streets,
    "Satellite" : satelliteStreets
  };

  //Using alternative map method 
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
  });

  // Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//streets.addTo(map);
// console.log(streets);
//Accessing the Toronto neighborhoods GeoJSON URL.
//let earthquakes7days = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// // Create a style for the lines.
// let myStyle = {
//     color: "#0000FF",
//     weight: 1,
//     fillColor: 'yellow',
//     fillOpacity: 0.1
// };



// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

//Loop through the cities array and create one marker for each city.
// data.forEach(function(data) {
//     console.log(data)
//     L.circleMarker(features[0].properties, { 
//       color: 'orange',
//       radius: features[0].properties.mag
//     })
//     .bindPopup("<h2> Location:" + features[0].properties.place + "</h2> <hr> <h3>Magnitude: " + features[0].properties.mag + "</h3>")
//   .addTo(map);
//   });