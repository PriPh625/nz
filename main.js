
/*
Script für die Neuseelandreise

*/

// Karte initialisieren
var map = L.map('map').setView([-44.116667, 170.166667], 11);

// Hintergrund definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Markerzeichnen
        var marker = L.marker([-44.116667, 170.166667]).addTo(map);

        //Popup definieren und öffnen
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();