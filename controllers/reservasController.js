var reservaModel = require('../models/reservasModel');

exports.reservas_all_get = function (req, res) {
  reservaModel.findAll({
    attributes: ['id', 'nombre_cliente', 'fecha', 'hora', 'email', 'id_servicio']
  })
    .then(data => res.json(data))
    .catch(err => res.status(500, err));
}

exports.reservas_detail_get = function (req, res) {
  let varId = Number(req.params.id);
  reservaModel.findByPk(varId, {
    attributes: ['id', 'nombre_cliente', 'fecha', 'hora', 'email', 'id_servicio']
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).send('error'));
}

exports.reservas_create = function (req, res) {
  console.log('peticionReserva', req.body);
  reservaModel.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).send(err);
    });
}