import { useParams } from "react-router-dom";
import resList from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurant = useRestaurantMenu(resId) ;
    
    if(!restaurant){
        return <h2>Restaurant not found.</h2>
    }
    
    return (
        <div className="min-h-screen flex justify-center py-12" >
        <div className="max-w-3xl w-5/12 px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" > {restaurant.name} </h1>
            <h3 className="text-lg font-semibold text-pink-400 mb-2" >Menu</h3>
        </div>
        <div className="space-y-3" >
            {restaurant.menu.map((item, i) => (
                <h4 key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 hover:shadow-sm transition"> {item} </h4>
            ))}
        </div>
        </div>
    )
}

export default RestaurantPage;