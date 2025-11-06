const { Router } = require('express');
const router = Router();

const busesController = require('../controllers/busesController.ts');

router.get('/:stationId', busesController.getBuses);

module.exports = router;