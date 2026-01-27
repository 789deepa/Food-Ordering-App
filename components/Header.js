import {useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnline();
    return (
        <div className = "bg-pink-300 text-black h-14 flex items-center justify-between px-6 m-2">
            <div className = "flex items-center h-full gap-6">
                <img alt="Logo" className="font-bold h-full flex items-center" src="/img/logo.png" />

            </div>
            <div className="nav-items flex m-0 p-0  ">
                <ul className="flex items-center gap-2 list-none m-0 p-0 font-semibold ">
                    <li className="hover:text-pink-100 transition" >Online Status: {onlineStatus ? "✅" : "❗"}</li>
                    <li><Link to = "/" className="hover:text-pink-100 transition">Home</Link></li>
                    <li><Link to = "/about" className="hover:text-pink-100 transition">About Us</Link></li>
                    <li><Link to = "/contact" className="hover:text-pink-100 transition">Contact Us</Link></li>
                    <li><Link to = "/grocery" className="hover:text-pink-100 transition" >Grocery</Link></li>
                    <li>Cart</li>
                    <button className="hover:text-pink-100 transition"
                    onClick={()=>{
                        setIsLoggedIn(!isLoggedIn);
                    }}>
                    {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;