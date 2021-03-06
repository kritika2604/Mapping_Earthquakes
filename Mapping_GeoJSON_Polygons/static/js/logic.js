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
    "Satellite Streets" : satelliteStreets
  };

  //Using alternative map method 
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
  });

  // Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//streets.addTo(map);
// console.log(streets);
//Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/kritika2604/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
    color: "#0000FF",
    weight: 1,
    fillColor: 'yellow',
    fillOpacity: 0.1
};

//Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            //console.log(layer);
            layer.bindPopup('<h2> Neighbourhood:'+ feature.properties.AREA_NAME + '</h2>');
        }
    }).addTo(map);

 });
