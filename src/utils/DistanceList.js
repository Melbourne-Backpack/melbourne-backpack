import {useEffect, useState} from "react";

const DistanceList = (addressList, origin) => {
    const destination = origin;
    const key =
        "AhF8TK_HweNDznULWo2UdUeUVlbR8lWnH1YmkWH7QWzXs1B_AbA634cKcCvR2PtB";
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

export default DistanceList
