const stationsQuery = () => `{
  stations {
    id: gtfsId
    name
  }
}`;

const stationStopsQuery = (stationId: string) => `{
  stations(ids: "${stationId}") {
    id: gtfsId
    name
    stops {
      id: gtfsId
      name
    }
  }
}`;

const serializeBuses = (data: any) => {
  const {
    stop: { id, name, stoptimesWithoutPatterns: buses }
  } = data;
  
  return {
    id,
    name,
    buses: buses.map((bus: any) => {
      const {
        delay,
        arrival,
        serviceDay,
        trip: {
          tripId,
          route: { name }
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

const stopBusesQuery = (stopId: string) => `
{
  stop(id: "${stopId}") {
    id: gtfsId
    name
    stoptimesWithoutPatterns {
      trip {
        tripId: gtfsId
        route {
          name: shortName
        }
      }
      arrival: realtimeArrival
      delay: arrivalDelay
      serviceDay
    }
  }
}
`;

module.exports = {
  stationsQuery,
  stationStopsQuery,
  serializeBuses,
  stopBusesQuery,
};