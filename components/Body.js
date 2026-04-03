import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Body = () => {
    
    const [resList1, setResList1 ] = useState(resList);
    const [filteredResto, setFilteredResto] = useState(resList);
    
    const [searchText, setSearchText] = useState("");

    const RestoCardPromoted = withPromotedLabel(RestoCard);
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
        <div className="body bg-brand-dark min-h-screen">
            <section className="border-b border-brand-border bg-gradient-to-b from-brand-darker to-brand-dark px-10 pt-12 pb-10">
                <p className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">
                    📍 Pune, Maharashtra
                </p>
                <h1 className="text-4xl md:text-5xl text-brand-text mb-8 leading-snug font-semibold" style={{fontFamily:"'Playfair Display',serif"}}>
                    Hungry? We've got<br/>
                    <span className="text-brand-accent">your next meal.</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="relative flex-1 max-w-md w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-secondary text-sm">🔍</span>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 border border-brand-border rounded-xl text-sm bg-brand-card focus:border-brand-accent focus:bg-brand-darker outline-none placeholder:text-brand-text-secondary transition-all duration-200 text-brand-text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search restaurants, cuisines..." />
                    </div>
                    <button
                        onClick={ ()=>{
                            const filtered = resList1.filter((res)=>
                                res.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredResto(filtered);
                        }}
                        className="bg-brand-accent text-brand-dark px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-accent-light shadow-card hover:shadow-elevated transition-all duration-200 w-full md:w-auto"
                    >
                        Search
                    </button>
                    <button
                        className="border-2 border-brand-accent text-brand-accent px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-accent hover:text-brand-dark hover:shadow-elevated transition-all duration-200 w-full md:w-auto"
                        onClick={()=>{
                            const filterList = resList1.filter(
                                (res) => res.rating > 4
                            );
                            setFilteredResto(filterList);
                        }}
                    >
                        ⭐ Top Rated
                    </button>
                </div>
            </section>

            <div className="px-10 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl font-semibold text-brand-text">Restaurants near you</h2>
                    <span className="text-sm font-semibold bg-brand-darker px-3 py-1 rounded-lg text-brand-accent border border-brand-border">{filteredResto.length} places</span>
                </div>
                <div className="grid gap-6" style={{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))"}}>
                    {filteredResto.map((restaurant) => {
                        console.log(restaurant.name, restaurant.isPromoted);
                        return (
                            <Link key={restaurant.id} to={"/restaurant/" + restaurant.id } className="group">
                            {restaurant.isPromoted ? (<RestoCardPromoted resData={restaurant} />) : (<RestoCard resData={restaurant} />)}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Body; 
