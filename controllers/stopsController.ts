const { stopBusesQuery, serializeBuses } = require("../utils/helpers/query");
const apiClient = require('../lib/apiClient.ts');

const getStopBuses = async (req: any, res: any) => {
  await apiClient.post('', { query: stopBusesQuery(req.params.stopId) })
    .then((response) => {
      const { data } = response.data;
      if(!(data && data.stop)) {
        throw new Error('Could not retrieve data or stop does not exist');
      }

      res.json({
        data: serializeBuses(data),
        success: true,
      });
    }).catch(() => {
      res.json({
        data: [],
        success: false
      });
    });
};

module.exports = {
  getStopBuses
};