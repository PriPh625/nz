/*
Script für die Neuseelandreise
*/
let lat = -44.116667;
let lng = 170.166667;
let zoom = 11;

let stop = {
    lat: -44.116667,
    lng: 170.166667,
    zoom: 11,
    title: "Lake Pukaki",
    nr: 25,
    user: "PriPh625",
};
// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

// Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

 // Markerzeichnen
      let marker = L.marker([lat, lng]).addTo(map);

//Popup definieren und öffnen
      marker.bindPopup(`<h2>Lake Pukaki</h2> 
        <ul> 
            <li>Geogr. Breite: ${lat.toFixed(5)}°</li> 
            <li>Geogr. Länge: ${lng.toFixed(5)}°</li> 
        </ul>
     `).openPopup(); 

