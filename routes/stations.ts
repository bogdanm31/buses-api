const { Router } = require('express');
const router = Router();

const {
  getStations,
  getStationStops
} = require('../controllers/stationsController');

router.get('/', getStations);
router.get('/:stationId', getStationStops);

module.exports = router;