var serviceModel = require('../models/serviceModel');

exports.services_all_get = function (req, res) {
  serviceModel.findAll({
    attributes: ['id', 'name', 'image', 'cost', 'description', 'happy']
  })
    .then(data => res.json(data))
    .catch(err => res.status(500, err));
}

exports.services_detail_get = function (req, res) {
  // serviceModel.findOne({
  //   where: { id: Number(req.params.id) },
  //   attributes:['id', 'name', 'image', 'cost', 'description', 'happy']
  // })
  //   .then(data => {
  //     console.log('data', data);
  //     res.json(data);
  //   })
  //   .catch(err => res.status(500).send('error'));


  serviceModel.findByPk(req.params.id, {
    attributes: ['id', 'name', 'image', 'cost', 'description', 'happy']
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).send('error'));
}