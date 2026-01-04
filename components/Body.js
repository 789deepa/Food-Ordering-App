import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    
    const [resList1, setResList1 ] = useState(resList);
    const [filteredResto, setFilteredResto] = useState(resList);
    
    const [searchText, setSearchText] = useState("");
     //whenever the state variable updates, react triggers the 'reconcillation' cycle (re-renders)  

    // //making an API call
    // useEffect(
    //     (fetchData)=>{}, 
    // [])
    
    // const fetchData = async () => {
    //     const data = await fetch ("");
    //     const json = await data.json();
    // }

    //conditional rendering 

    // useEffect(()=>{
    //     setFilteredResto(resList1);
    // }, []);
    return resList1.length === 0 ? <Shimmer/> : (
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}  />
                <button onClick={ ()=>{
                    const filtered = resList1.filter((res)=>
                        res.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    
                setFilteredResto(filtered);
                }}>search</button>

            </div>
            <button className="top-search btn" 
            onClick={()=>{
                const filterList = resList1.filter(
                    (res) => res.rating > 4
                );
                setFilteredResto(
                    resList1.filter((res) => res.rating > 4)
                );
            }}
            > Top Rated restaurant</button>
        </div>
            <div className="res-container">
                {/* resto cards */}
                 {   filteredResto.map((restaurant) => (
                        <RestoCard key={restaurant.id} resData={restaurant} />
                    ))}                 
            </div>
        </div>
    );
};

export default Body; 