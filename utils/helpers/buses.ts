const serializeBuses = (data: any) => {
  const {
    stop: { id, name, stoptimesWithoutPatterns: buses }
  } = data;
  
  return {
    station: { id, name },
    buses: buses.map((bus: any) => {
      const {
        arrivalDelay: delay,
        realtimeArrival: arrival,
        serviceDay,
        trip: {
          id: tripId,
          route: { shortName: name }
        }
      } = bus;
      return {
        tripId,
        name,
        arrival,
        delay,
        serviceDay
      };
    })
  }
};

const busesQuery = (stationId: string) => `
{
  stop(id: "${stationId}") {
    id
    name
    stoptimesWithoutPatterns {
      trip {
        id
        route {
          shortName
        }
      }
      realtimeArrival
      arrivalDelay
      serviceDay
    }
  }
}
`;

module.exports = {
  serializeBuses,
  busesQuery
};