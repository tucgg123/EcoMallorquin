/**
 * Reportes de ejemplo que se muestran al abrir la página.
 * type: ambiental | infraestructura   ·   date: AAAA-MM-DD
 */
window.ECO = window.ECO || {};

window.ECO.seedReports = [
  {
    id: 'ejemplo-1',
    type: 'ambiental',
    title: 'Acumulación de residuos plásticos',
    location: 'Zona norte del manglar',
    date: '2025-11-10',
    description: 'Se observa acumulación de botellas plásticas y residuos en la orilla que afectan el ecosistema.'
  },
  {
    id: 'ejemplo-2',
    type: 'infraestructura',
    title: 'Sendero flotante requiere mantenimiento',
    location: 'Senderos ecológicos',
    date: '2025-11-08',
    description: 'Algunas secciones del sendero de madera muestran desgaste y necesitan reparación para seguridad de visitantes.'
  },
  {
    id: 'ejemplo-3',
    type: 'ambiental',
    title: 'Vertimiento de aguas residuales',
    location: 'Sector oeste',
    date: '2025-11-05',
    description: 'Se detectó posible vertimiento directo de aguas sin tratamiento afectando la calidad del agua.'
  }
];
