# Mapping_Earthquakes
Mapping Earthquakes with JS and APIs

## Project Overview:
The purpose of this project is to gather earthquake data from the open to public use websites like USGS API and create interactive maps of earthquakes around the world by gathering information these websites.

## Resources:
### Data Sources: 
US geological survey website: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson,

Earthquakes above 4.5mag GeoJSON: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson,

Tectonic Plate GeoJSON: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

### Applications/softwares used: 

Javascript, D3 and leaflet library and plot the data
on mapbox app thorugh an API request


## Results:
- Using the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data.
- The Leaflet library is used to plot the data on a Mapbox map through an API request and create interactive maps for the earthquake data.
- New layers showing Tectonic plates and major earthquakes was added.
- New base layers showing satellite view and dark views were also introduced to make the map more lively. 

**Streets view:**
<img width="1124" alt="image" src="https://user-images.githubusercontent.com/94858846/161188757-0ac9c462-44d6-49b9-9ff5-0d10868997d5.png">

**Satellite view:**
<img width="1127" alt="image" src="https://user-images.githubusercontent.com/94858846/161188836-fe902785-d9b7-4cdc-ae69-59bec925e104.png">

**Dark view:**
<img width="1124" alt="image" src="https://user-images.githubusercontent.com/94858846/161188884-6e627a4a-e5dc-45e8-b476-a85c86d4d42f.png">


