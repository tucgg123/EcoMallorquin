/**
 * Mapa de la Ciénaga de Mallorquín: centro y lugares de interés.
 * Las coordenadas son [latitud, longitud]. Para mover un punto,
 * cambia sus coordenadas (se pueden copiar desde Google Maps o OpenStreetMap).
 */
window.ECO = window.ECO || {};

window.ECO.map = {
  center: [11.0085, -74.8547],
  zoom: 13
};

window.ECO.places = [
  { name: 'Ciénaga de Mallorquín', description: 'Humedal costero y ecosistema de manglar.', coords: [11.0085, -74.8547] },
  { name: 'Zona de observación de aves', description: 'Punto para ver aves acuáticas y migratorias.', coords: [11.0150, -74.8600] },
  { name: 'Área de manglar', description: 'Franja de mangle rojo, negro y blanco.', coords: [11.0050, -74.8500] },
  { name: 'Puerto pesquero', description: 'Desde aquí salen los pescadores de la ciénaga.', coords: [11.0020, -74.8580] },
  { name: 'Zona de anidación', description: 'Área sensible. Se observa desde lejos y en silencio.', coords: [10.9980, -74.8520] },
  { name: 'Senderos ecológicos', description: 'Senderos flotantes para recorrer el manglar a pie.', coords: [11.0100, -74.8450] }
];
