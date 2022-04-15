import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";

const ShoppingScreen = () => {
  const [shoppingData, setShoppingData] = useState([]);

  const fetchData = () => {
    getDocs(collection(db, "shopping")).then((data) => {
      setShoppingData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = [
    {
      id: 1,
      name: "South Melbourne Market",
      address: "322 - 326 Coventry St, Melbourne, Victoria 3205",
    },
    {
      id: 2,
      name: "Royal Arcade",
      address: "335 Bourke St, Melbourne, Victoria 3000",
    },
    {
      id: 3,
      name: "Emporium Melbourne",
      address: "287 Lonsdale St, Melbourne, Victoria 3000",
    },
    {
      id: 4,
      name: "Bourke Street Mall",
      address: "Bourke Street Jodhpur Rajasthan, Melbourne, Victoria 3000",
    },
  ];

  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={data}
      topic="Shopping"
      categories={categories}
    />
  );
};

export default ShoppingScreen;
