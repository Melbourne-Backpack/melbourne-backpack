import { useEffect, useState } from "react";

export default function Distance(address1, address2) {
  const startingAddress = address1;
  const destination = address2;
  const [distance, setDistance] = useState();
  const key =
    "AhF8TK_HweNDznULWo2UdUeUVlbR8lWnH1YmkWH7QWzXs1B_AbA634cKcCvR2PtB";
  useEffect(() => {
    const url = `http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=${startingAddress}&wayPoint.2=${destination}&key=${key}`;
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setDistance(res["resourceSets"][0]["resources"][0]["travelDistance"]);
        });
    };
    getData();
  }, [startingAddress]);
  return distance;
}
