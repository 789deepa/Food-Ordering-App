import {lazy, Suspence} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import Shimmer from "./components/Shimmer"; 
import "./index.css";



const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="min-h-screen">
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
        path: "/grocery",
        element: <Suspence fallback={<h1>Heloow this is suspence </h1>} ><Grocery/>  </Suspence>,
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

