import { environment } from 'src/environments/environment.prod';
import { eTipoConsulta } from '../classes/consulta';

const consultas: any = [
  {
    nombre: 'Traer Tickets',
    data: `
  try {
    const data = await TicketModel.find();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }`,
    url: environment.api + 'ticket',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: 'Tickets sin resolver',
    data: `
    const { resuelto } = req.query;

  try {
    const data = await TicketModel.find({ resuelto: resuelto });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
    `,
    url: environment.api + 'ticket/estado?resuelto=false',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: 'Tickets resueltos',
    data: `
    const { resuelto } = req.query;

  try {
    const data = await TicketModel.find({ resuelto: resuelto });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
    `,
    url: environment.api + 'ticket/estado?resuelto=true',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: 'Traer por tipo desperfecto',
    data: `
    const { tipo } = req.query;
  console.log(tipo);
  try {
    const data = await TicketModel.find({ tipo: tipo });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }`,
    url: environment.api + 'ticket/tipo?tipo=desperfecto',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$geoWithin Traer por oficina',
    data: `
    const { nombre } = req.query;
  try {
    const oficina = await OficinaModel.findOne({ nombre: nombre });
    const data = await TicketModel.find({
      ubicacion: {
        $geoWithin: {
          $geometry: oficina.ubicacion,
        },
      },
    });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
    `,
    url: environment.api + 'ticket/oficina?nombre=OF - SUDAFRICA',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$near Tickets cercanos',
    data: `const { ubicacion } = req.body;

    try {
      const data = await TicketModel.findOne({
        ubicacion: {
          $near: {
            $geometry: { ...ubicacion, maxDistance: 10 },
          },
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/cercano',
    tipo: eTipoConsulta.POST,
    body: {
      ubicacion: {
        coordinates: [-75.856077, -40.848447],
        type: 'Point',
      },
    },
  },
  {
    nombre: '$expr $gt $size Traer tickets con mas de una solucion',
    data: `
    try {
      const data = await TicketModel.find({
        $expr: { $gt: [{ $size: "$soluciones" }, 1] },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/soluciones',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$expr $gte $size Traer tickets con alguna derivacion',
    data: `try {
      const data = await TicketModel.find({
        $expr: { $gte: [{ $size: "$derivaciones" }, 1] },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/derivaciones',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$match $project $lt SuperPackFull Barato',
    data: `try {
      const data = await TicketModel.aggregate([
        {
          $match: {
            "planes.actual.nombre": "SuperPackFull",
            "planes.actual.valor": { $lt: 2000 },
          },
        },
        {
          $project: {
            usuario: 1,
          },
        },
      ]);
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/spuerpackfull/barato',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$match $not $lte $project SuperPackFull Caro',
    data: `try {
      const data = await TicketModel.aggregate([
        {
          $match: {
            "planes.actual.nombre": "SuperPackFull",
            "planes.actual.valor": { $not: { $lte: 4000 } },
          },
        },
        {
          $project: {
            usuario: 1,
          },
        },
      ]);
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/spuerpackfull/caro',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$match $unwind $sortByCount Canales de los superpack full',
    data: `try {
      const data = await TicketModel.aggregate([
        {
          $match: {
            "planes.actual.nombre": "SuperPackFull",
          },
        },
        {
          $unwind: {
            path: "$planes.actual.canales",
          },
        },
        {
          $sortByCount: "$planes.actual.canales",
        },
      ]);
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/spuerpackfull',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$nin Traer x localidad',
    data: `const { localidades } = req.body;
    try {
      const data = await TicketModel.find({
        localidad: {
          $nin: localidades,
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/traerExcluyenteLocalidad',
    tipo: eTipoConsulta.POST,
    body: {
      localidades: [
        {
          codigo_postal: '1870',
          descripcion: 'Avellaneda',
        },
      ],
    },
  },
  {
    nombre: '$in Traer x localidad',
    data: `const { localidades } = req.body;
    try {
      const data = await TicketModel.find({
        localidad: {
          $in: localidades,
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'ticket/traerIncluyenteLocalidad',
    tipo: eTipoConsulta.POST,
    body: {
      localidades: [
        {
          codigo_postal: '1870',
          descripcion: 'Avellaneda',
        },
      ],
    },
  },
  {
    nombre: 'Traer empleados',
    data: `
    try {
      const data = await EmpleadoModel.find();
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'empleado',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$and Traer nombre y apellido',
    data: `const { nombre, apellido } = req.query;
    try {
      const data = await EmpleadoModel.find({
        $and: [{ nombre: nombre }, { apellido: apellido }],
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'empleado/datos?nombre=Agustin&apellido=Friadenrich',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$geoIntersects Traer oficina cercana',
    data: `const { id } = req.query;
    try {
      const ticket = await TicketModel.findById(id);
      console.log(ticket);
      const data = await OficinaModel.find({
        ubicacion: {
          $geoIntersects: {
            $geometry: ticket.ubicacion,
          },
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'oficina/cercana?id=655b803357b0ed20ecd239e5',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$eq Traer oficina x tipo',
    data: `const { tipo } = req.query;
    try {
      const data = await OficinaModel.find({
        tipo: {
          $eq: tipo,
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'oficina/tipo?tipo=atencion personal',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$ne Traer oficina x tipo Excluyendte',
    data: `const { tipo } = req.query;
    try {
      const data = await OficinaModel.find({
        tipo: {
          $ne: tipo,
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }`,
    url: environment.api + 'oficina/tipoEx?tipo=atencion personal',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: '$ne $or Traer tickets NO de cambio de plan O normales',
    data: `
    try {
      const data = await TicketModel.aggregate([
        {
          $match: {
            $or: [
              {
                motivo: {
                  $ne: "cambio de plan",
                },
              },
              {
                "planes.actual.nombre": "normal",
              },
            ],
          },
        },
        {
          $project: {
            "planes.previos": 1,
          },
        },
      ]);
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }
    `,
    url: environment.api + 'ticket/traerTicketsNormal',
    tipo: eTipoConsulta.GET,
    body: {},
  },
  {
    nombre: 'Mensaje contiene /moti/ig',
    data: `try {
      const data = await TicketModel.aggregate([
        {
          $match: {
            mensaje: /moti/gi,
          },
        },
        {
          $group: {
            _id: "$usuario",
            mensajes: {
              $push: "$mensaje",
            },
          },
        },`,
    url: environment.api + 'ticket/traerMensajeMoti',
    tipo: eTipoConsulta.GET,
    body: {},
  },
];

export default consultas;

/*
{
    nombre: '',
    data: ``,
    url: environment.api + '',
    tipo: eTipoConsulta.GET,
    body: {},
  },

*/
