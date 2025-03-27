/*
Script für die Neuseelandreise
*/

let stop = {
    lat: -44.116667,
    lng: 170.166667,
    zoom: 11,
    title: "Lake Pukaki",
    nr: 25,
    user: "PriPh625",
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

 // Markerzeichnen
      let marker = L.marker([stop.lat, stop.lng]).addTo(map);

//Popup definieren und öffnen
      marker.bindPopup(`<h2>${stop.title}</h2> 
        <ul> 
            <li>Geogr. Breite: ${stop.lat.toFixed(5)}°</li> 
            <li>Geogr. Länge: ${stop.lng.toFixed(5)}°</li> 
        </ul>
     `).openPopup(); 

