/*
Script für die Neuseelandreise
*/
let lat = -44.116667;
let lng = 170.166667;
let zoom = 11;
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
      marker.bindPopup(`
          <b>Hello world!</b>
          <br>
          I am a popup at ${lat.toFixed(5)} / ${lng.toFixed(5)}.
      `).openPopup(); 