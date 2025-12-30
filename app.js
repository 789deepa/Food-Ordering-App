import React from "react";
import ReactDOM from "react-dom/client";

/* 
* Header 
* -logo
* -Nav items
* Body
* -Search
* -RestaurantContainer
*   - Restaurant cards
*     -img -name - rating 
* Footer
* -copyright
* -contact 
*/

const Header = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img alt="Logo" className="logo" src="/img/logo.png" />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const RestoCard = ({resData}) => {
    const { name, description, rating, deliveryTime} = resData;
    return (
        <div className="res-cards">
            <img className="res-card" alt="Saffron Route" src="/img/food.jpg" />
            <h3>{name}</h3>  
            <h4>{description} </h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime} </h4>
        </div>
    );
};

const resList = [
  {
    id: "res_102",
    name: "Coastal Curry House",
    cuisine: "Goan, Konkan, Seafood",
    description:
      "Coastal Curry House specializes in authentic Goan and Konkan-style seafood.",
    rating: 4.4,
    totalRatings: "9.8K+",
    avgCostForTwo: "₹850 for two",
    deliveryTime: "40 mins",
    distance: "7.1 km",
    isPureVeg: false,
    isOpen: true,
    imageId: "/img/coastal-curry.jpg",
    offers: ["20% OFF up to ₹120"],
    tags: ["Seafood Special", "Authentic Coastal", "Spicy"],
    outlet: "Dharampeth, Nagpur"
  },

  {
    id: "res_103",
    name: "Urban Tandoor",
    cuisine: "Punjabi, North Indian, Tandoor",
    description:
      "Urban Tandoor brings smoky tandoori flavors and classic Punjabi dishes to the city.",
    rating: 4.3,
    totalRatings: "15K+",
    avgCostForTwo: "₹750 for two",
    deliveryTime: "35 mins",
    distance: "5.4 km",
    isPureVeg: false,
    isOpen: true,
    imageId: "/img/urban-tandoor.jpg",
    offers: ["Flat ₹100 OFF on orders above ₹399"],
    tags: ["Tandoori", "Comfort Food", "Best Sellers"],
    outlet: "Ramdaspeth, Nagpur"
  },

  {
    id: "res_104",
    name: "Green Bowl Studio",
    cuisine: "Healthy, Salads, Continental",
    description:
      "Green Bowl Studio focuses on healthy, balanced meals with fresh ingredients.",
    rating: 4.7,
    totalRatings: "6.2K+",
    avgCostForTwo: "₹600 for two",
    deliveryTime: "28 mins",
    distance: "3.2 km",
    isPureVeg: true,
    isOpen: true,
    imageId: "/img/green-bowl.jpg",
    offers: ["Free smoothie on orders above ₹499"],
    tags: ["Healthy Eats", "Protein Rich", "Low Cal"],
    outlet: "IT Park, Nagpur"
  }
];
export default resList;

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* resto cards */}
                 {   resList.map((restaurant) => (
                        <RestoCard resData={restaurant} />
                    ))}                 
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div> 
               
    );    
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
