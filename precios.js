// ═══════════════════════════════════════════════════════════════
// MAPULAUQUEN · Archivo de precios y configuración
// Editar aquí para actualizar TODOS los documentos del sistema.
// También se puede editar en vivo desde el Modo Admin del cotizador
// (candado en el encabezado) — esos cambios quedan guardados en el
// navegador y se pueden exportar como un precios.js nuevo para subir
// aquí y dejarlos disponibles en todos los equipos.
// ═══════════════════════════════════════════════════════════════

window.MP_CONFIG = {

// ─── CLAVE DE ACCESO AL MODO ADMIN ─────────────────────────────
// Cámbiala cuando quieras — es solo para evitar que un huésped
// entre por error a editar precios, no es una clave de seguridad alta.
adminPassword: 'mapulauquen2026',

// ─── FUENTE EN VIVO (opcional) ─────────────────────────────────
// Si más adelante publicas en la web (Archivo > Compartir > Publicar
// en la web > CSV) la pestaña "DIARIO" de tu Google Sheet
// (MAESTRO MAPULAUQUEN), pega aquí la URL que te entrega Google
// (termina en "output=csv") y el cotizador va a preferir siempre
// esos valores por sobre los de abajo, cada vez que alguien abra la
// página. Si la deja vacía o falla la carga, se usan los precios de
// este archivo tal cual.
sheetCsvUrl: '',

// ─── TEMPORADAS ────────────────────────────────────────────────
// Se evalúan por rango de fechas (no por mes completo), así que un
// feriado corto también puede marcarse como Alta sin afectar el
// resto del mes. Editable desde el Modo Admin.
// tipo: 'A' = Alta · 'M' = Media · (todo lo que no cae en una regla = Baja)
// Los rangos pueden cruzar fin de año (ej: 15 dic → 15 mar).
temporadas: {
  reglas: [
    { nombre:'Temporada de verano', tipo:'A', desde:{mes:12, dia:15}, hasta:{mes:3, dia:15} },
    { nombre:'Fiestas Patrias', tipo:'A', desde:{mes:9, dia:17}, hasta:{mes:9, dia:20} },
    { nombre:'Vacaciones de invierno', tipo:'M', desde:{mes:7, dia:6}, hasta:{mes:7, dia:19} },
    { nombre:'Marzo (post verano)', tipo:'M', desde:{mes:3, dia:16}, hasta:{mes:3, dia:31} },
    { nombre:'Diciembre (previo a temporada alta)', tipo:'M', desde:{mes:12, dia:1}, hasta:{mes:12, dia:14} },
  ]
},

// ─── CABAÑAS ───────────────────────────────────────────────────
cabanas: [
  { id:'MP01', nombre:'Araucaria', icon:'\u{1F332}', dorms:1, banos:1, grupo:'S', ocup:3,
    desc:'1 hab. matrimonial · diván en living · estufa a pellet · cocina americana' },
  { id:'MP02', nombre:'Alerce', icon:'\u{1F33F}', dorms:3, banos:2, grupo:'M', ocup:6,
    desc:'1 hab. matrimonial · 1 hab. nido · 1 hab. 2 camas plaza · 2 baños · chimenea' },
  { id:'MP03', nombre:'Ulmo', icon:'\u{1F343}', dorms:4, banos:2, grupo:'L', ocup:7,
    desc:'1 matri · 2 individuales · 1 individual plaza · camarote · 2 baños' },
  { id:'MP04', nombre:'Castaño', icon:'\u{1F330}', dorms:3, banos:1, grupo:'M', ocup:4,
    desc:'1 hab. matrimonial · 2 camas individuales de plaza · estufa a pellet' },
  { id:'MP05', nombre:'Boldo', icon:'\u{1F33E}', dorms:3, banos:1, grupo:'M', ocup:6,
    desc:'1 hab. matrimonial · 2 camarotes · estufa a pellet · cocina americana' },
  { id:'MP06', nombre:'Laurel', icon:'\u{1F340}', dorms:2, banos:2, grupo:'S', ocup:4,
    desc:'2 pisos · 1 matri con baño en suite · 1 nido con baño en suite · sala de estar' },
  { id:'MP07', nombre:'Raulí', icon:'\u{1F333}', dorms:3, banos:1, grupo:'M', ocup:6,
    desc:'1 hab. matrimonial · 2 camarotes · estufa a pellet · cocina americana' },
  { id:'MP08', nombre:'Coihue', icon:'\u{1F33F}', dorms:3, banos:1, grupo:'M', ocup:6,
    desc:'1 hab. matrimonial · 2 camarotes · estufa a pellet · cocina americana' },
  { id:'MP09', nombre:'Ciprés', icon:'\u{1F332}', dorms:4, banos:2, grupo:'L', ocup:8,
    desc:'1 matri · 2 individuales · 2 camarotes · 2 baños · estufa a pellet' },
  { id:'MP10', nombre:'Pino Oregón', icon:'\u{1F3D4}', dorms:6, banos:3, grupo:'XL', ocup:10,
    desc:'2 matri · 2 ind. de plaza · 1 camarote · 1 individual · 3 baños · 2 estufas pellet' },
  { id:'MP11', nombre:'Arrayán', icon:'\u{1F338}', dorms:2, banos:1, grupo:'S', ocup:4,
    desc:'1 hab. matrimonial · 2 camas individuales · estufa a pellet' },
],

// ─── PRECIOS CABAÑAS ────────────────────────────────────────────
// d1 = precio POR NOCHE (base del cálculo)
// d7 = precio TOTAL estadía ≥7 noches (se usa para calcular % descuento)
// d30 = precio TOTAL estadía ≥30 noches
// mensual = precio mensual fijo
// B=Baja · M=Media · A=Alta
// mn=mínimo · mx=máximo (cotizador usa promedio salvo que el Modo Admin
// haya guardado un valor puntual — ver mp_admin_overrides en localStorage)
precios: {
  MP01: {
    d1: { B:{mn:69000, mx:79000}, M:{mn:89000, mx:99000}, A:{mn:99000, mx:109000} },
    d7: { B:{mn:434700, mx:497700}, M:{mn:560000, mx:623000}, A:{mn:504000, mx:693000} },
    d30: { B:{mn:1035000,mx:1185000}, M:{mn:3300000,mx:3570000}, A:{mn:2160000,mx:2970000} },
    mensual: { B:{mn:550000, mx:650000}, M:{mn:660000, mx:780000}, A:{mn:792000, mx:936000} }
  },
  MP02: {
    d1: { B:{mn:129000, mx:139000}, M:{mn:119000, mx:159000}, A:{mn:140000, mx:189000} },
    d7: { B:{mn:812700, mx:875700}, M:{mn:833000, mx:1113000}, A:{mn:784000, mx:1323000} },
    d30: { B:{mn:1935000,mx:2085000}, M:{mn:3570000,mx:4770000}, A:{mn:3360000,mx:5670000} },
    mensual: { B:{mn:790000, mx:890000}, M:{mn:948000, mx:1068000}, A:{mn:1137600,mx:1281600} }
  },
  MP03: {
    d1: { B:{mn:139000, mx:149000}, M:{mn:160000, mx:179000}, A:{mn:199000, mx:219000} },
    d7: { B:{mn:875700, mx:938700}, M:{mn:1120000,mx:1253000}, A:{mn:1114400,mx:1533000} },
    d30: { B:{mn:2085000,mx:2235000}, M:{mn:4800000,mx:5370000}, A:{mn:4776000,mx:6570000} },
    mensual: { B:{mn:800000, mx:900000}, M:{mn:960000, mx:1080000}, A:{mn:1152000,mx:1296000} }
  },
  MP04: {
    d1: { B:{mn:99000, mx:109000}, M:{mn:119000, mx:129000}, A:{mn:140000, mx:149000} },
    d7: { B:{mn:623700, mx:686700}, M:{mn:833000, mx:903000}, A:{mn:784000, mx:1043000} },
    d30: { B:{mn:1485000,mx:1635000}, M:{mn:3570000,mx:3870000}, A:{mn:3360000,mx:4470000} },
    mensual: { B:{mn:650000, mx:750000}, M:{mn:780000, mx:900000}, A:{mn:936000, mx:1080000} }
  },
  MP05: {
    d1: { B:{mn:99000, mx:109000}, M:{mn:119000, mx:129000}, A:{mn:140000, mx:149000} },
    d7: { B:{mn:623700, mx:686700}, M:{mn:833000, mx:903000}, A:{mn:784000, mx:1043000} },
    d30: { B:{mn:1485000,mx:1635000}, M:{mn:3570000,mx:3870000}, A:{mn:3360000,mx:4470000} },
    mensual: { B:{mn:650000, mx:750000}, M:{mn:780000, mx:900000}, A:{mn:936000, mx:1080000} }
  },
  MP06: {
    d1: { B:{mn:119000, mx:129000}, M:{mn:110000, mx:139000}, A:{mn:120000, mx:169000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:770000, mx:973000}, A:{mn:672000, mx:1183000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3300000,mx:4170000}, A:{mn:2880000,mx:5070000} },
    mensual: { B:{mn:650000, mx:750000}, M:{mn:780000, mx:900000}, A:{mn:936000, mx:1080000} }
  },
  MP07: {
    d1: { B:{mn:119000, mx:129000}, M:{mn:130000, mx:139000}, A:{mn:160000, mx:169000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:910000, mx:973000}, A:{mn:896000, mx:1183000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3900000,mx:4170000}, A:{mn:3840000,mx:5070000} },
    mensual: { B:{mn:700000, mx:750000}, M:{mn:840000, mx:900000}, A:{mn:1008000,mx:1080000} }
  },
  MP08: {
    d1: { B:{mn:119000, mx:129000}, M:{mn:130000, mx:139000}, A:{mn:160000, mx:169000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:910000, mx:973000}, A:{mn:896000, mx:1183000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3900000,mx:4170000}, A:{mn:3840000,mx:5070000} },
    mensual: { B:{mn:700000, mx:750000}, M:{mn:840000, mx:900000}, A:{mn:1008000,mx:1080000} }
  },
  MP09: {
    d1: { B:{mn:189000, mx:209000}, M:{mn:220000, mx:230000}, A:{mn:240000, mx:249000} },
    d7: { B:{mn:1190700,mx:1316700}, M:{mn:1540000,mx:1610000}, A:{mn:1344000,mx:1743000} },
    d30: { B:{mn:2835000,mx:3135000}, M:{mn:6600000,mx:6900000}, A:{mn:5760000,mx:7470000} },
    mensual: { B:{mn:900000, mx:990000}, M:{mn:1080000,mx:1188000}, A:{mn:1296000,mx:1425600} }
  },
  MP10: {
    d1: { B:{mn:230000, mx:239000}, M:{mn:240000, mx:250000}, A:{mn:270000, mx:279000} },
    d7: { B:{mn:1449000,mx:1505700}, M:{mn:1680000,mx:1750000}, A:{mn:1512000,mx:1953000} },
    d30: { B:{mn:3450000,mx:3585000}, M:{mn:7200000,mx:7500000}, A:{mn:6480000,mx:8370000} },
    mensual: { B:{mn:1200000,mx:1300000}, M:{mn:1440000,mx:1560000}, A:{mn:1728000,mx:1872000} }
  },
  MP11: {
    d1: { B:{mn:119000, mx:129000}, M:{mn:110000, mx:119000}, A:{mn:120000, mx:129000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:770000, mx:833000}, A:{mn:672000, mx:903000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3300000,mx:3570000}, A:{mn:2880000,mx:3870000} },
    mensual: { B:{mn:650000, mx:750000}, M:{mn:780000, mx:900000}, A:{mn:936000, mx:1080000} }
  }
},

// ─── COMIDA ─────────────────────────────────────────────────────
// Fuente: cotización de comida oficial (Inmobiliaria Las Brizas SpA).
// unidad: 'pp' = precio por persona · 'unidad' = precio por unidad/porción
comida: {
  categorias: [
    { id:'almuerzos', nombre:'Comidas (Almuerzos / Cenas)', unidad:'pp', nota:'Incluyen 1 pan amasado por persona.', items:[
      { id:'cm01', nombre:'Tortilla de verduras con arroz, ensalada de lechuga y zanahoria', precio:8800 },
      { id:'cm02', nombre:'Pollo a la plancha con arroz o papas doradas, ensalada de repollo colores y palta', precio:10450 },
      { id:'cm03', nombre:'Pastel de papas (de carne o de pollo) con ensalada chilena', precio:10450 },
      { id:'cm04', nombre:'Budín de verduras con papas doradas, ensalada surtida', precio:8800 },
      { id:'cm05', nombre:'Hamburguesa de soya con puré, ensalada de repollo, zanahoria y palta', precio:9350 },
    ]},
    { id:'postres', nombre:'Postres', unidad:'unidad', nota:'Rinden 10 porciones cada uno (Kuchen y Pie de limón).', items:[
      { id:'cm06', nombre:'Kuchen de durazno (10 porciones)', precio:15400 },
      { id:'cm07', nombre:'Pie de limón (10 porciones)', precio:16500 },
      { id:'cm08', nombre:'Alfajor de maicena (8 cm de diámetro)', precio:880 },
    ]},
    { id:'desayuno-aliados', nombre:'Desayunos · Aliados en pan molde', unidad:'unidad', items:[
      { id:'cm09', nombre:'Aliado jamón queso', precio:2200 },
      { id:'cm10', nombre:'Aliado hummus pesto', precio:2750 },
      { id:'cm11', nombre:'Aliado pollo palta', precio:2750 },
      { id:'cm12', nombre:'Aliado lechuga, tomate, queso y pesto', precio:2750 },
    ]},
    { id:'desayuno-sandwich', nombre:'Desayunos · Sándwich (pan de fabricación propia)', unidad:'unidad', items:[
      { id:'cm13', nombre:'Ave, palta, mayo', precio:4400 },
      { id:'cm14', nombre:'Hummus, tomate, palta', precio:4400 },
      { id:'cm15', nombre:'Lechuga, tomate, queso, pesto', precio:4400 },
      { id:'cm16', nombre:'Hamburguesa de soya, lechuga, tomate, palta', precio:4400 },
    ]},
    { id:'dulces', nombre:'Dulces', unidad:'unidad', items:[
      { id:'cm17', nombre:'Galletón de avena con chips de chocolate', precio:880 },
      { id:'cm18', nombre:'Queque de plátano glaseado', precio:880 },
      { id:'cm19', nombre:'Queque de frambuesa glaseado', precio:880 },
      { id:'cm20', nombre:'Queque de naranja glaseado', precio:880 },
    ]},
    { id:'pan', nombre:'Pan', unidad:'unidad', items:[
      { id:'cm21', nombre:'Pan amasado (100 gramos)', precio:242 },
    ]},
  ]
},

// ─── SPA ──────────────────────────────────────────────────────
// Fuente: Carta de Servicios · Spa Mapulauquen — "Conecta con tu bienestar"
spa: {
  categorias: [
    { id:'hidromasaje', nombre:'Hidromasaje y Relajación', items:[
      { id:'sp01', nombre:'Jacuzzi', detalle:'45–60 min · 2 personas', precio:35000, unidad:'sesión' },
      { id:'sp02', nombre:'Tinaja', detalle:'60 min · 2 personas — tinaja de madera a leña, incluye infusión herbal', precio:40000, unidad:'sesión' },
      { id:'sp03', nombre:'Piscina temperada exterior', detalle:'2 hrs · 8–10 personas — sesión grupal', precio:40000, unidad:'sesión' },
    ]},
    { id:'reflexologia', nombre:'Reflexología y Drenaje', items:[
      { id:'sp04', nombre:'Reflexología', detalle:'30 min', precio:45000, unidad:'sesión' },
      { id:'sp05', nombre:'Drenaje linfático', detalle:'30 min', precio:50000, unidad:'sesión' },
    ]},
    { id:'alquimia', nombre:'Alquimia Corporal', items:[
      { id:'sp06', nombre:'Alquimia abdominal', detalle:'60 min', precio:50000, unidad:'sesión' },
    ]},
    { id:'masajes', nombre:'Masajes', items:[
      { id:'sp07', nombre:'Relajación + jacuzzi', detalle:'60 min · mín. 2 personas', precio:45000, unidad:'pp' },
      { id:'sp08', nombre:'Relajación · reiki + piedras', detalle:'60 min', precio:45000, unidad:'pp' },
      { id:'sp09', nombre:'Descontracturante · piedras', detalle:'50 min', precio:45000, unidad:'sesión' },
      { id:'sp10', nombre:'Descontracturante · reiki', detalle:'50 min', precio:45000, unidad:'sesión' },
      { id:'sp11', nombre:'Relajación', detalle:'50 min · cuerpo completo', precio:40000, unidad:'sesión' },
      { id:'sp12', nombre:'Masaje niño', detalle:'30 min · hasta 12 años, acompañados', precio:35000, unidad:'sesión' },
    ]},
  ]
},

// ─── SALÓN Y MONTAJE ────────────────────────────────────────────
// Ítems de precio MANUAL: no tienen un valor fijo — se escribe el
// precio (y la cantidad) cada vez que se arma la cotización. Así se
// pueden cotizar ítems que escalan con el N° de personas (ej. "Adicional
// por persona" con cantidad = personas extra sobre el aforo base).
// El campo "detalle" es fijo (lo que incluye el ítem) y se muestra
// siempre; se edita desde el Modo Admin, igual que se pueden agregar
// o quitar ítems.
salon: {
  categorias: [
    { id:'salon-eventos', nombre:'Salón de Eventos y Montaje', items:[
      { id:'sal01', nombre:'Salón de Eventos', manual:true,
        detalle:'Incluye: uso del salón techado, mesas y sillas básicas, baños y estacionamiento. (Edita este detalle en Modo Admin > Salón según lo que definas para cada evento).' },
      { id:'sal02', nombre:'Servicio de mantelería', manual:true,
        detalle:'Mantelería para las mesas del evento (cantidad y tipo a coordinar con la clienta).' },
      { id:'sal03', nombre:'Montaje y mobiliario (sillas y mesas)', manual:true,
        detalle:'Instalación de montaje y mobiliario adicional: sillas y mesas extra al salón.' },
      { id:'sal04', nombre:'Adicional por persona', manual:true,
        detalle:'Cargo por persona sobre el aforo base cotizado inicialmente (ej. si se cotizó para 50 y ahora son 70, cantidad = 20).' },
      { id:'sal05', nombre:'Mantelería y montaje adicional', manual:true,
        detalle:'Mesas, manteles y montaje extra requeridos por el aumento de aforo.' },
    ]}
  ],
  // Normas del salón: se muestran siempre que la cotización incluya
  // algún ítem de salón (panel y cotización imprimible). Editables
  // desde Modo Admin > Salón.
  normas: [
    'Capacidad máxima 80 personas',
    'Dejar limpio',
    '6 horas de uso',
    'Ruido fuerte máximo hasta las 12:00 hrs',
    'Entrega del salón máximo 2:00 AM',
    'Informar cuántos estacionamientos necesitan',
  ]
}

};
