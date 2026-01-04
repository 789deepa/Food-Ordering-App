import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    
    const [resList1, setResList1 ] = useState(resList)

    // //making an API call
    // useEffect(
    //     (fetchData)=>{}, 
    // [])
    
    // const fetchData = async () => {
    //     const data = await fetch ("");
    //     const json = await data.json();
    // }

    //conditional rendering 

    return resList1.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search">Search</div>
            <button className="top-search btn" 
            onClick={()=>{
                const filterList = resList1.filter(
                    (res) => res.rating > 4
                );
                setResList1(filterList);
            }}
            > Top Rated restaurant</button>

            <div className="res-container">
                {/* resto cards */}
                 {   resList1.map((restaurant) => (
                        <RestoCard key={restaurant.id} resData={restaurant} />
                    ))}                 
            </div>
        </div>
    );
};

export default Body; 