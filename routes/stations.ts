const { Router } = require('express');
const router = Router();

const stationsController = require('../controllers/stationsController');

router.get('/', stationsController.getStations);

module.exports = router;