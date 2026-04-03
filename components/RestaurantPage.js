import { useParams } from "react-router-dom";
import resList from "../utils/mockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantAccordion from "./RestaurantAccordian";

const RestaurantPage = () => {
    const { resId } = useParams();
    const restaurant = useRestaurantMenu(resId);

    if(!restaurant){
        return <div className="min-h-screen bg-brand-dark flex items-center justify-center"><h2 className="text-brand-accent text-2xl font-semibold">Restaurant not found.</h2></div>
    }

    return (
        <div className="min-h-screen bg-brand-dark py-12">
            <div className="max-w-3xl mx-auto px-6">
                <RestaurantHeader name={restaurant.name} />
                <RestaurantAccordion restaurant={restaurant} />
            </div>
        </div>
    )
};

export default RestaurantPage;