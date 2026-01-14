import { useState, useEffect } from "react";
import resList from "./mockData";

const useRestaurantMenu = (resId) => {    
    //fetch data 
    const [resto, setResto] = useState(null); 
    
    const fetchData = () => {
       const data = resList.find((res) => res.id === resId);
       setResto(data);
    }

    useEffect(()=>{
        fetchData();
    }, [resId]);


    return resto;
}

export default useRestaurantMenu;