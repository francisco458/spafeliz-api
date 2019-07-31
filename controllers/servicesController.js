var serviceModel = require('../models/serviceModel');

exports.services_all_get = function (req, res) {
  serviceModel.findAll({
    attributes: ['id', 'name', 'image', 'cost', 'description', 'happy']
  })
    .then(data => res.json(data))
    .catch(err => res.status(500, err));
}

exports.services_detail_get = function (req, res) {
  let varId = Number(req.params.id);
  // serviceModel.findOne({
  //   where: { id: varId },
  //   attributes:['id', 'name', 'image', 'cost', 'description', 'happy']
  // })
  //   .then(data => {
  //     console.log('data', data);
  //     res.json(data);
  //   })
  //   .catch(err => res.status(500).send('error'));

  
  serviceModel.findByPk(varId, {
    attributes: ['id', 'name', 'image', 'cost', 'description', 'happy']
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).send('error'));
}