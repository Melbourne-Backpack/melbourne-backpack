import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import {db} from "../../config/firebase"
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";

const HousingScreen = () => {
    const housingRef = collection(db, "housing")
    const [housing, setHousing] = useState([])
    const fetchData = () => {
        getDocs(housingRef).then((data) => {
            setHousing(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const categories = ["Type", "Price", "Distance from RMIT"];
    if (housing !== []) {
        return (
            <RecommendationTemplate
                topic="Housing"
                data={housing}
                housing={true}
                categories={categories}
            />
        );
    }
};
export default HousingScreen;
