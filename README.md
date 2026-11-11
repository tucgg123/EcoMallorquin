# EcoMallorquín

Sitio web para la gestión y conservación de la **Ciénaga de Mallorquín**, un humedal costero con manglar en el norte de Barranquilla (Atlántico, Colombia). Permite explorar un mapa interactivo, hacer reportes ciudadanos de problemas ambientales o de infraestructura y conocer las especies que viven en la ciénaga.

![Vista aérea de la Ciénaga de Mallorquín](assets/img/vista-aerea.webp)

## Páginas

| Página | Qué hace |
| ------ | -------- |
| `index.html` | Presentación, datos del lugar y las mejores horas para visitarlo |
| `mapa.html` | Mapa interactivo con 6 lugares de interés y ubicación en tiempo real (GPS) |
| `reportar.html` | Formulario para reportar problemas y lista de reportes recientes |
| `biodiversidad.html` | 18 especies de manglar, aves, peces y otros animales, con filtro por grupo |

## Tecnologías

HTML, CSS y JavaScript sin frameworks. Mapa con [Leaflet](https://leafletjs.com) 1.9.4 (incluido en `assets/vendor/`) y datos de mapa de [OpenStreetMap](https://www.openstreetmap.org). Publicado con GitHub Pages.

## Estructura del proyecto

```
EcoMallorquin/
├── index.html
├── mapa.html
├── reportar.html
├── biodiversidad.html
└── assets/
    ├── css/styles.css          # Estilos de todo el sitio
    ├── js/
    │   ├── map.js              # Lógica del mapa
    │   ├── reports.js          # Formulario y lista de reportes
    │   ├── biodiversity.js     # Listado y filtros de especies
    │   └── data/               # Contenido editable
    │       ├── places.js       # Lugares del mapa
    │       ├── species.js      # Especies
    │       └── reports.js      # Reportes de ejemplo
    ├── img/                    # Fotos (WebP) y logo
    └── vendor/leaflet/         # Librería del mapa (licencia BSD-2)
```

## Cómo editar el contenido

No hace falta tocar la lógica: todo el contenido está en `assets/js/data/`.

- **Agregar una especie:** copia un bloque en `species.js` y cambia sus datos. `group` puede ser `manglar`, `aves`, `peces` u `otros`; `status` puede ser `prioritario`, `estable`, `preocupacion` o `vulnerable`.
- **Mover o agregar un lugar en el mapa:** edita `places.js`. Las coordenadas son `[latitud, longitud]`.
- **Cambiar los reportes de ejemplo:** edita `reports.js`.

## Cómo probarlo

- **En línea:** abre el sitio publicado en GitHub Pages.
- **En tu computador:** abre la carpeta con la extensión Live Server de VS Code, o ejecuta `python3 -m http.server` dentro de la carpeta y entra a `http://localhost:8000`.

## Sobre los reportes

Esta versión es una **demostración sin servidor**: cada reporte queda guardado solo en el navegador de quien lo escribe (`localStorage`) y no se envía a ninguna entidad. La foto adjunta se muestra únicamente mientras la página está abierta. Para recibir reportes reales haría falta conectar un servicio como Firebase.

## Créditos

- Mapas: © [colaboradores de OpenStreetMap](https://www.openstreetmap.org/copyright).
- Librería de mapas: [Leaflet](https://leafletjs.com), © Vladimir Agafonkin, licencia BSD-2.
