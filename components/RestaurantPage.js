import { useParams } from "react-router-dom";
import resList from "../utils/mockData";

const RestaurantPage = () => {
    const { resId } = useParams();

    const restaurant = resList.find(
        (res) => res.id === resId
    );

    if(!restaurant){
        return <h2>Restaurant not found.</h2>
    }
    
    return (
        <div>
            <h1> {restaurant.name} </h1>
            <h3>Menu</h3>

            {restaurant.menu.map((item, i) => (
                <h4 key={i}> {item} </h4>
            ))}
        </div>
    )
}

export default RestaurantPage;