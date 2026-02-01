import { useParams } from "react-router-dom";
import resList from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantAccordion from "./RestaurantAccordian";

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurant = useRestaurantMenu(resId);

    if(!restaurant){
        return <h2>Restaurant not found.</h2>
    }
    
    return (
        <div className="min-h-screen flex justify-center py-12" >
            <div className="max-w-3xl w-5/12 px-6">
                <RestaurantHeader name={restaurant.name} />
                <RestaurantAccordion restaurant={restaurant} />
            </div>
        </div>


    )
};

export default RestaurantPage;