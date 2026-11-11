/**
 * Especies de la Ciénaga de Mallorquín.
 * Para agregar una especie, copia un bloque y cambia sus datos.
 *
 * group:  manglar | aves | peces | otros
 * status: prioritario | estable | preocupacion | vulnerable
 */
window.ECO = window.ECO || {};

window.ECO.species = [
  {
    name: 'Mangle Rojo',
    scientific: 'Rhizophora mangle',
    group: 'manglar',
    description: 'Árbol perennifolio dominante en la ciénaga, con raíces zancudas características que estabilizan el sedimento y dan estructura al ecosistema. Fundamental para la protección costera.',
    status: 'prioritario'
  },
  {
    name: 'Mangle Negro',
    scientific: 'Avicennia germinans',
    group: 'manglar',
    description: 'Presenta raíces aéreas (neumatóforos) que permiten la respiración en suelos anóxicos. Muy común en Mallorquín y tolerante a alta salinidad.',
    status: 'prioritario'
  },
  {
    name: 'Mangle Blanco',
    scientific: 'Laguncularia racemosa',
    group: 'manglar',
    description: 'Tolera zonas más elevadas de la franja intermareal. Frecuente en la ciénaga, crece en áreas con menor influencia salina directa.',
    status: 'prioritario'
  },
  {
    name: 'Mangle Amarillo',
    scientific: 'Conocarpus erectus',
    group: 'manglar',
    description: 'Localizado en áreas inundables interiores según inventarios locales. Complementa el ecosistema de manglar en zonas de transición.',
    status: 'prioritario'
  },
  {
    name: 'Botoncillo',
    scientific: 'Conocarpus erectus',
    group: 'manglar',
    description: 'Arbusto/árbol costero frecuente en bordes de manglar. Importante para la estabilización de zonas de transición entre manglar y tierra firme.',
    status: 'estable'
  },
  {
    name: 'Pato Silbón de Cara Blanca',
    scientific: 'Dendrocygna viduata',
    group: 'aves',
    description: 'Ave acuática residente, común en humedales. Se alimenta de vegetación acuática y semillas. Forma grandes grupos en zonas de agua abierta.',
    status: 'estable'
  },
  {
    name: 'Golondrina Tijereta',
    scientific: 'Hirundo rustica',
    group: 'aves',
    description: 'Ave migratoria boreal que visita la ciénaga. Insectívoro aéreo que utiliza el humedal como área de alimentación durante la migración.',
    status: 'estable'
  },
  {
    name: 'Garza Tigre',
    scientific: 'Tigrisoma lineatum',
    group: 'aves',
    description: 'Garza grande de comportamiento piscívoro. Habita en áreas de manglar y zonas con vegetación densa. Cazador solitario y sigiloso.',
    status: 'preocupacion'
  },
  {
    name: 'Ostrero Americano',
    scientific: 'Haematopus palliatus',
    group: 'aves',
    description: 'Residente costero que se observa en zonas intermareales. Se alimenta de moluscos y crustáceos usando su característico pico rojo.',
    status: 'estable'
  },
  {
    name: 'Garza Rojiza',
    scientific: 'Egretta rufescens',
    group: 'aves',
    description: 'Registrada en inventarios locales. Ave costera especializada en pesca activa en aguas someras. Presenta comportamiento de caza característico.',
    status: 'vulnerable'
  },
  {
    name: 'Lisa',
    scientific: 'Mugil incilis',
    group: 'peces',
    description: 'Pez de la familia Mugilidae. Visitante del mar Caribe que migra según salinidad. La ciénaga funciona como área de alimentación y crianza.',
    status: 'estable'
  },
  {
    name: 'Anchoveta Caribeña',
    scientific: 'Cetengraulis edentulus',
    group: 'peces',
    description: 'Pez pequeño de la familia Engraulidae. Importante en la cadena alimenticia del ecosistema. Forma cardúmenes en aguas estuarinas.',
    status: 'estable'
  },
  {
    name: 'Mojarra',
    scientific: 'Diapterus rhombeus',
    group: 'peces',
    description: 'Familia Gerreidae. Común en la ciénaga, utiliza el humedal como zona de paso entre el mar y el río Magdalena según condiciones de salinidad.',
    status: 'estable'
  },
  {
    name: 'Mojarra Plateada',
    scientific: 'Eugerres plumieri',
    group: 'peces',
    description: 'Especie registrada en muestreos de la ciénaga. Se adapta a variaciones de salinidad, aprovechando el estuario para alimentación.',
    status: 'estable'
  },
  {
    name: 'Boa Constrictor',
    scientific: 'Boa constrictor',
    group: 'otros',
    description: 'Reptil registrado en inventarios regionales. Habita en zonas de manglar y áreas riparias. Depredador que controla poblaciones de roedores.',
    status: 'preocupacion'
  },
  {
    name: 'Lagarto Tegú',
    scientific: 'Tupinambis teguixin',
    group: 'otros',
    description: 'Lagarto grande presente en la región. Omnívoro que habita en zonas terrestres cercanas al manglar. Importante dispersor de semillas.',
    status: 'estable'
  },
  {
    name: 'Cangrejo Violinista',
    scientific: 'Uca spp.',
    group: 'otros',
    description: 'Crustáceo característico de zonas de manglar. Los machos presentan una pinza grande distintiva. Fundamental en el ciclo de nutrientes del manglar.',
    status: 'estable'
  },
  {
    name: 'Mapache',
    scientific: 'Procyon cancrivorus',
    group: 'otros',
    description: 'Mamífero registrado entre las ~11 especies de mamíferos de la ciénaga. Omnívoro nocturno que habita en zonas de manglar y riparias.',
    status: 'estable'
  }
];
