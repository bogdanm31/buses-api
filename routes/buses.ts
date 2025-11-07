const { Router } = require('express');
const router = Router();

const busesController = require('../controllers/busesController');

router.get('/:stationId', busesController.getBuses);

module.exports = router;