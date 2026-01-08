import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div> 
               
    );    
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
    {
          path: "/",
          element: <Body/>,
     },
    {
        path: "/about",
        element: <About/>,
    }, 
    {
        path:"/contact",
        element: <Contact/>,
    },
    {
        path: "/restaurant/:resId",
        element: <RestaurantPage />
    }
        ] ,
        errorElement: <Error/>,
    }, 
    
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router = {appRouter} />);

