const { stationsQuery } = require("../utils/helpers/query");
const apiClient = require('../lib/apiClient');

const getStations = async (_, res) => {
  await apiClient.post('', { query: stationsQuery() })
    .then(response => {
      const { data } = response.data;
      if(!(data && data.stations)) {
        throw new Error('Could not retrieve data!');
      }
      
      const stations = data.stations.map(({ gtfsId, name }) => ({ id: gtfsId, name }));
      res.json({ data: stations });
    }).catch(() => {
      res.json({
        data: [],
        success: false
      });
    });
}

module.exports = {
  getStations
};