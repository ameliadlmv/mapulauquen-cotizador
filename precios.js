// ═══════════════════════════════════════════════════════════════
// MAPULAUQUEN · Archivo de precios y configuración
// Editar aquí para actualizar TODOS los documentos del sistema
// ═══════════════════════════════════════════════════════════════

window.MP_CONFIG = {

// ─── TEMPORADAS ────────────────────────────────────────────
// Meses: 1=Ene ... 12=Dic
temporadas: {
  alta: { meses: [1, 2, 7], // Enero, Febrero, Julio completos
    periodos: [
      { desde: {mes:12, dia:15}, hasta: {mes:3, dia:15} }, // Verano
      { desde: {mes:9, dia:17}, hasta: {mes:9, dia:20} }, // Fiestas Patrias
    ]
  },
  media: { meses: [4, 5, 10, 11],
    periodos: [
      { desde: {mes:3, dia:16}, hasta: {mes:3, dia:31} },
      { desde: {mes:12,dia:1}, hasta: {mes:12,dia:14} },
    ]
  }
  // Baja = todo lo demás (Jun, Ago, Sep fuera de FF.PP.)
},

// ─── CABAÑAS ───────────────────────────────────────────────
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
  { id:'MP07', nombre:'Rauí', icon:'\u{1F333}', dorms:3, banos:1, grupo:'M', ocup:6,
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

// ─── PRECIOS ───────────────────────────────────────────────
// d1 = precio POR NOCHE (base del cálculo)
// d7 = precio TOTAL estadía ≥7 noches (se usa para calcular % descuento)
// d30 = precio TOTAL estadía ≥30 noches
// mensual = precio mensual fijo
// B=Baja · M=Media · A=Alta
// mn=mínimo · mx=máximo (cotizador usa promedio)
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
    d1: { B:{mn:99000, mx:109000}, M:{mn:130000, mx:139000}, A:{mn:160000, mx:169000} },
    d7: { B:{mn:623700, mx:686700}, M:{mn:903000, mx:910000}, A:{mn:896000, mx:1183000} },
    d30: { B:{mn:1485000,mx:1635000}, M:{mn:3900000,mx:4170000}, A:{mn:3840000,mx:5070000} },
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
    d1: { B:{mn:119000, mx:129000}, M:{mn:110000, mx:139000}, A:{mn:140000, mx:169000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:770000, mx:973000}, A:{mn:784000, mx:1183000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3900000,mx:4170000}, A:{mn:3360000,mx:5070000} },
    mensual: { B:{mn:700000, mx:750000}, M:{mn:840000, mx:900000}, A:{mn:1008000,mx:1080000} }
  },
  MP08: {
    d1: { B:{mn:119000, mx:129000}, M:{mn:130000, mx:139000}, A:{mn:160000, mx:169000} },
    d7: { B:{mn:749700, mx:812700}, M:{mn:910000, mx:973000}, A:{mn:896000, mx:1183000} },
    d30: { B:{mn:1785000,mx:1935000}, M:{mn:3900000,mx:4170000}, A:{mn:3840000,mx:5070000} },
    mensual: { B:{mn:700000, mx:750000}, M:{mn:840000, mx:900000}, A:{mn:1008000,mx:1080000} }
  },
  MP09: {
    d1: { B:{mn:189000, mx:209000}, M:{mn:160000, mx:230000}, A:{mn:240000, mx:249000} },
    d7: { B:{mn:1190700,mx:1316700}, M:{mn:1540000,mx:1610000}, A:{mn:1344000,mx:1743000} },
    d30: { B:{mn:2835000,mx:3135000}, M:{mn:6600000,mx:6600000}, A:{mn:5760000,mx:7470000} },
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
}
};
