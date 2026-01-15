import {useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnline();
    return (
        <div className = "header">
            <div className = "logo-container">
                <img alt="Logo" className="logo" src="/img/logo.png" />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "❗"}</li>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li><Link to = "/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login"
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