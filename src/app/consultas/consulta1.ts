const c1: any = [
  {
    tipo: 'agua',
    sabores: ['chocolate', 'vainilla', 'frutilla', 'dulce de leche'],
    peso: 2,
    fecha_vencimiento: new Date('2023-10-01T08:00:00Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: false,
    fabricante: {
      localidad: 'Avellaneda',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'crema',
    sabores: ['vainilla', 'naranja'],
    peso: 1,
    fecha_vencimiento: new Date('2023-10-05T09:00:00Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: true,
    fabricante: {
      localidad: 'Berazategui',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'agua',
    sabores: ['dulce de leche'],
    peso: 10,
    fecha_vencimiento: new Date('2024-10-15T09:00:00Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: true,
    fabricante: {
      localidad: 'Bernal',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'crema',
    sabores: ['chocolate'],
    peso: 20,
    fecha_vencimiento: new Date('2024-10-04T11:21:39.736Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: false,
    fabricante: {
      localidad: 'Berazategui',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'crema',
    sabores: ['dulce de leche', 'naranja'],
    peso: 10,
    fecha_vencimiento: new Date('2023-10-04T21:23:13.331Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: false,
    fabricante: {
      localidad: 'Avellaneda',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'vegano',
    sabores: ['chocolate', 'vainilla', 'frutilla', 'dulce de leche'],
    peso: 5,
    fecha_vencimiento: new Date('2023-10-04T05:08:13Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: true,
    fabricante: {
      localidad: 'Avellaneda',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'vegano',
    sabores: ['vainilla'],
    peso: 10,
    fecha_vencimiento: new Date('2023-10-10T08:43:00Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: false,
    fabricante: {
      localidad: 'Berazategui',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'agua',
    sabores: ['chocolate'],
    peso: 5,
    fecha_vencimiento: new Date('2025-05-06T20:20:13Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: true,
    fabricante: {
      localidad: 'Berazategui',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'crema',
    sabores: ['dulce de leche'],
    peso: 5,
    fecha_vencimiento: new Date('2022-04-06T20:20:13Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: true,
    fabricante: {
      localidad: 'Avellaneda',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },

  {
    tipo: 'agua',
    sabores: ['vainilla', 'frutilla', 'dulce de leche'],
    peso: 5,
    fecha_vencimiento: new Date('2025-09-06T20:20:13Z'),
    precio: [
      { tipo: 'mercadoPago', precio: 120 },
      { tipo: 'efectivo', precio: 500 },
    ],
    baniado_chocolate: false,
    fabricante: {
      localidad: 'Bernal',
      nombre: 'Heladitos',
      cuit: '25-12345678-6',
    },
  },
];

export { c1 };
