// Проверяю наличие контейнера для карты на странице
const mapContainer = document.getElementById('map');

// Добавляю карту, если контейнер найден
if (mapContainer) {
    let map = L.map('map').setView([55.774836, 37.632664], 17);
    let leaflet = L.icon({
      iconUrl: './img/marker-icon.png',
      iconSize: [38, 50],
      iconAnchor: [19, 50],
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(map);

    // Добавляю маркер
    let marker = L.marker([55.774836, 37.632664], { icon: leaflet }).addTo(map);
}
