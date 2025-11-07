const { stationsQuery } = require("../utils/helpers/query");
const apiClient = require('../lib/apiClient.ts');

const getStations = async (_, res) => {
  const response:any = await apiClient.post('', { query: stationsQuery() });
  const stations = response.data.data.stations.map(({ gtfsId, name }) => ({ id: gtfsId, name }));

  res.json({ data: stations });
}

module.exports = {
  getStations
};