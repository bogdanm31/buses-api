const { busesQuery, serializeBuses } = require("../utils/helpers/query");
const apiClient = require('../lib/apiClient.ts');

const getBuses = async (req: any, res: any) => {
  const response:any = await apiClient.post('', { query: busesQuery(req.params.stationId) });
  const buses = serializeBuses(response.data.data);

  res.json({ data: buses });
};

module.exports = {
  getBuses
};