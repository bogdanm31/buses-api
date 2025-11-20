const { stationsQuery, stationStopsQuery } = require("../utils/helpers/query");
const apiClient = require('../lib/apiClient');

const getStations = async (_, res) => {
  await apiClient.post('', { query: stationsQuery() })
    .then(response => {
      const { data } = response.data;
      if(!(data && data.stations)) {
        throw new Error('Could not retrieve data!');
      }
      
      res.json({
        data: data.stations,
        success: true
      });
    }).catch(() => {
      res.json({
        data: [],
        success: false
      });
    });
}

const getStationStops = async (req, res) => {
  await apiClient.post('', { query: stationStopsQuery(req.params.stationId) })
    .then(response => {
      const { data } = response.data;
      if(!(data && data.stations)) {
        throw new Error('Could not retrieve data!');
      }
      
      res.json({
        data: data.stations[0],
        success: true
      });
    }).catch((error) => {
      res.json({
        data: [],
        success: false,
        error
      });
    });
}

module.exports = {
  getStations,
  getStationStops
};