let map = L.map('map').setView([-22.909410, -43.232954], 13)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

 document.getElementById('select-location').addEventListener('change', function (e) {
        let coords = e.target.value.split(",");
        map.flyTo(coords, 13);
    })

    