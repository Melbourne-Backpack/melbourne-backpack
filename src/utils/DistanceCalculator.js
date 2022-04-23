import { useEffect, useState } from "react";
import { DISTANCE_CALCULATOR_KEY } from "@env";

const calculateDistanceWithAddress = (addressList, origin) => {
  const destination = origin;
  const key = DISTANCE_CALCULATOR_KEY;
  const [distanceList, setDistanceList] = useState([]);
  useEffect(() => {
    addressList.map((address) => {
      let url = `http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=${address}&wayPoint.2=${destination}&key=${key}`;
      return fetch(url, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((housingData) => {
          setDistanceList((prevState) => [
            ...prevState,
            housingData["resourceSets"][0]["resources"][0]["travelDistance"],
          ]);
        });
    });
  }, []);
  return distanceList;
};

const calculateDistanceFromCoordinates = (lat1, long1, lat2, long2) => {
  const distanceUrl = `http://dev.virtualearth.net/REST/v1/Routes/Walking?wayPoint.1=${lat1},${long1}&wayPoint.2=${lat2},${long2}&key=${DISTANCE_CALCULATOR_KEY}`;
  fetch(distanceUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data["resourceSets"][0]["resources"][0]["travelDistance"];
    });
};

export { calculateDistanceWithAddress, calculateDistanceFromCoordinates };
