import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
