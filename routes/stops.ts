const { Router } = require('express');
const router = Router();

const { getStopBuses } = require('../controllers/stopsController');

router.get('/:stopId', getStopBuses);

module.exports = router;