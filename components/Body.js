import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Body = () => {
    
    const [resList1, setResList1 ] = useState(resList);
    const [filteredResto, setFilteredResto] = useState(resList);
    
    const [searchText, setSearchText] = useState("");
     //whenever the state variable updates, react triggers the 'reconcillation' cycle (re-renders)  

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants");
    //     const json = await data.json();

    //     setResList1(json.data);
    //     setFilteredResto(json.data);
    // };

    // useState(resList);

    const onlineStatus = useOnline();
    if(onlineStatus === false) return <h1>Looks like you're offline! </h1>

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
                        <Link key={restaurant.id} to={"/restaurant/" + restaurant.id }><RestoCard resData={restaurant} /></Link>
                    ))}                 
            </div>
        </div>
    );
};

export default Body; 
