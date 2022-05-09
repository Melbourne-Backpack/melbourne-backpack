import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import {useEffect, useState} from "react";

import {DEVID, ROUTE_TYPE_SIGNATURE, TRANSPORT_SIGNATURE} from "@env";

const busImg = require("../../../assets/images/bus.jpg");
const tramImg = require("../../../assets/images/tram.jpg");
const trainImg = require("../../../assets/images/train.jpg");

const devID = String(DEVID)
const routeTypeSignature = String(ROUTE_TYPE_SIGNATURE)
const transportSignature = String(TRANSPORT_SIGNATURE)

const TransportScreen = () => {
    const [rawData, setRawData] = useState([]);
    const [routeType, setRouteType] = useState([]);
    const typeUrl = `http://timetableapi.ptv.vic.gov.au/v3/route_types?devid=${devID}&signature=${routeTypeSignature}`;

    const lat = "-37.8080770201347";
    const long = "144.96268921184907";
    const dataUrl = `http://timetableapi.ptv.vic.gov.au/v3/stops/location/${lat},${long}?devid=${devID}&signature=${transportSignature}`;

    const getRouteType = () => {
        fetch(typeUrl)
            .then((res) => res.json())
            .then((data) => {
                setRouteType(data["route_types"]);
            });
    };

    const getRawData = () => {
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => {
                setRawData(data["stops"]);
            });
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

    const addImg = (type) => {
        let img;
        const transportMode = defineRouteType(type);
        if (transportMode === "Tram") {
            img = tramImg;
        } else if (transportMode === "Train") {
            img = trainImg;
        } else {
            img = busImg;
        }
        return img;
    };

    const getRouteNumAndName = (routes) => {
        const routeInfo = [];
        routes.map((route) => {
            routeInfo.push({
                routeName: route["route_name"],
                routeNum: route["route_number"],
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
                transportType: defineRouteType(data["route_type"]),
                img: addImg(data["route_type"]),
                routes: getRouteNumAndName(data["routes"]),
            });
        });
        return processedData;
    };

    useEffect(() => {
        getRouteType();
        getRawData();
    }, []);

    // getDistance();
    const categories = ["Distance from RMIT"];

    return (
        <RecommendationTemplate
            data={processRawData()}
            topic="Transportation"
            categories={categories}
            transport
        />
    );
};

export default TransportScreen;
