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
        <div className="body">
            <section className=" border-b border-[#ffd1ae] px-10 pt-10 pb-8">
                <p className="text-xs font-medium text-[#FF6B35] uppercase tracking-widest mb-2">
                    Pune, Maharashtra
                </p>
                <h1 className="text-3xl text-[#1a1a1a] mb-6 leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>
                    Hungry? We've got<br/>
                    <span className="text-[#FF6B35]">your next meal.</span>
                </h1>

                <div className="flex items-center gap-3">
                    <div className="relative flex-1 max-w-md">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999] text-sm">🔍</span>
                        <input 
                            type="text"
                            className="w-full pl-9 pr-4 py-2.5 border border-[#E8E6E1] rounded-xl text-sm bg-[#FAFAFA] focus:border-[#FF6B35] focus:bg-white outline-none placeholder:text-[#999999] transition" 
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
                        className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#FF8C42] transition"
                    >
                        Search
                    </button>
                    <button 
                        className="border border-[#E8E6E1] text-[#1a1a1a] px-4 py-2.5 rounded-xl text-sm font-medium hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FFF5EF] transition" 
                        onClick={()=>{
                            const filterList = resList1.filter(
                                (res) => res.rating > 4
                            );
                            setFilteredResto(filterList);
                        }} 
                    > 
                        Top Rated
                    </button>
                </div>
            </section>

            <div className="px-10 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-xl text-[#1a1a1a]">Restaurants near you</h2>
                    <span className="text-sm text-[#ffffff]">{filteredResto.length} places</span>
                </div>
                <div className="grid gap-5" style={{gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))"}}>
                    {filteredResto.map((restaurant) => { 
                        console.log(restaurant.name, restaurant.isPromoted); 
                        return (
                            <Link key={restaurant.id} to={"/restaurant/" + restaurant.id }>
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
