var express = require('express');
var router = express.Router();

var services_controller = require('../controllers/servicesController');

/* GET services listing. */
router.get('/', services_controller.services_all_get);

router.get('/all', function(req, res, next) {
  res.send('Response all services spa');
});

router.get('/:id', services_controller.services_detail_get);

module.exports = router;
