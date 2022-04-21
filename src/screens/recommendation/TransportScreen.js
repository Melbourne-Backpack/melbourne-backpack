import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import { useEffect, useState } from "react";

import { DEVID, ROUTE_TYPE_SIGNATURE, TRANSPORT_SIGNATURE } from "@env";

const TransportScreen = () => {
  const [rawData, setRawData] = useState([]);
  const [routeType, setRouteType] = useState([]);
  const [transportData, setTransportData] = useState([]);
  const typeUrl = `http://timetableapi.ptv.vic.gov.au/v3/route_types?devid=${DEVID}&signature=${ROUTE_TYPE_SIGNATURE}`;

  const lat = "-37.8080770201347";
  const long = "144.96268921184907";
  const dataUrl = `http://timetableapi.ptv.vic.gov.au/v3/stops/location/${lat},${long}?devid=${DEVID}&signature=${TRANSPORT_SIGNATURE}`;

  const getRouteType = () => {
    fetch(typeUrl)
      .then((res) => res.json())
      .then((data) => setRouteType(data["route_types"]));
  };

  const getRawData = () => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => setRawData(data["stops"]));
  };

  const defineRouteType = (type) => {
    let routeName = "";
    routeType.map((route) => {
      if (route["route_type"] === type) {
        routeName = route["route_type_name"];
      }
    });
    return routeName;
  };

  const getRouteNumAndName = (routes) => {
    const routeInfo = [];
    routes.map((route) => {
      routeInfo.push({
        routeName: route["route_name"],
        routNum: route["route_number"],
      });
    });
    return routeInfo;
  };

  const processRawData = () => {
    const processedData = [];
    rawData.map((data) => {
      processedData.push({
        stopName: data["stop_name"],
        stopLat: data["stop_latitude"],
        stopLong: data["stop_longitude"],
        transportationType: defineRouteType(data["route_type"]),
        route: getRouteNumAndName(data["routes"]),
      });
    });
    return processedData;
  };

  useEffect(() => {
    getRouteType();
    getRawData();
  }, []);

  console.log(processRawData());

  const data = [
    {
      id: 1,
      name: "Cranbourne Line",
      address:
        "Departure: Cranbourne Railway Station, Station St, Cranbourne 3977",
    },
    {
      id: 2,
      name: "Bus 234",
      address: "Departure: 11 Centre Ave, Port Melbourne VIC 3207",
    },
    {
      id: 3,
      name: "Yarra Trams line 16",
      address: "Melbourne University, Swanston St #1, Carlton VIC 3053",
    },
    {
      id: 4,
      name: "Pakenham Line",
      address: "Railway Ave & Henry Rd, Pakenham VIC 3810",
    },
  ];

  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={data}
      topic="Transportation"
      categories={categories}
    />
  );
};

export default TransportScreen;
