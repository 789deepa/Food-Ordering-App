import {useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState(false);
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
                    <button className="login"
                    onClick={()=>{
                        setBtnName(!btnName);
                    }}>
                    {btnName ? "Logout" : "Login"}
                    </button>
                </ul>
            </div>
        </div>
    );
};


export default Header;