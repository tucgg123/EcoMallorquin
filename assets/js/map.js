/**
 * Mapa interactivo de la Ciénaga de Mallorquín (Leaflet + OpenStreetMap).
 * Los lugares y el centro del mapa se editan en assets/js/data/places.js.
 */
(function () {
  'use strict';

  const mapElement = document.getElementById('map');
  const placeList = document.getElementById('place-list');
  const statusText = document.getElementById('map-status');
  const locateButton = document.getElementById('locate');
  const centerButton = document.getElementById('center');

  // Si Leaflet no cargó, se avisa en lugar de dejar el espacio vacío.
  if (typeof L === 'undefined') {
    mapElement.classList.add('map-fallback');
    mapElement.textContent = 'No se pudo cargar el mapa. Revisa tu conexión y recarga la página.';
    return;
  }

  const { center, zoom } = window.ECO.map;
  const places = window.ECO.places;

  const map = L.map(mapElement).setView(center, zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  function numberedIcon(label, extraClass) {
    return L.divIcon({
      className: 'pin ' + (extraClass || ''),
      html: '<span class="pin-number">' + label + '</span>',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });
  }

  // El contenido del globo se arma con textContent para no insertar HTML.
  function popupContent(place) {
    const box = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = place.name;
    const text = document.createElement('p');
    text.style.margin = '4px 0 0';
    text.textContent = place.description;
    box.append(title, text);
    return box;
  }

  const markers = places.map((place, index) => {
    const marker = L.marker(place.coords, {
      icon: numberedIcon(index + 1),
      title: place.name,
      alt: place.name
    }).addTo(map);
    marker.bindPopup(popupContent(place));
    return marker;
  });

  // Lista de lugares: también sirve a quien no usa el mapa con el ratón.
  places.forEach((place, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'place-btn';

    const number = document.createElement('span');
    number.className = 'pin-number';
    number.textContent = index + 1;
    number.setAttribute('aria-hidden', 'true');

    const text = document.createElement('span');
    const name = document.createElement('strong');
    name.textContent = place.name;
    const description = document.createElement('span');
    description.className = 'desc';
    description.textContent = place.description;
    text.append(name, description);

    button.append(number, text);
    button.addEventListener('click', () => {
      map.setView(place.coords, 15);
      markers[index].openPopup();
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    item.append(button);
    placeList.append(item);
  });

  markers[0].openPopup();

  /* ---------- Mi ubicación ---------- */
  let userMarker = null;

  function setStatus(message) {
    statusText.textContent = message;
  }

  locateButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
      setStatus('Tu navegador no permite obtener la ubicación.');
      return;
    }

    setStatus('Buscando tu ubicación…');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const point = [position.coords.latitude, position.coords.longitude];
        if (userMarker) map.removeLayer(userMarker);

        userMarker = L.marker(point, { icon: numberedIcon('Yo', 'pin-user'), title: 'Tu ubicación' }).addTo(map);
        userMarker.bindPopup('Tu ubicación actual').openPopup();
        map.setView(point, 15);
        setStatus('Ubicación encontrada.');
      },
      () => {
        setStatus('No pudimos obtener tu ubicación. Revisa los permisos de ubicación del navegador.');
      }
    );
  });

  centerButton.addEventListener('click', () => {
    map.setView(center, zoom);
    setStatus('');
  });
})();
