var express = require('express');
var router = express.Router();

var reservas_controller = require('../controllers/reservasController');

/* GET reservas listing. */
router.get('/all', reservas_controller.reservas_all_get);

router.get('/:id', reservas_controller.reservas_detail_get);

router.post('/', reservas_controller.reservas_create)

module.exports = router;
