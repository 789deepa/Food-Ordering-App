import {useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnline();
    return (
        <div className = "bg-gray-900 text-white h-14 flex items-center justify-between px-6 m-2">
            <div className = "flex items-center h-full gap-6">
                <img alt="Logo" className="font-bold h-full flex items-center" src="/img/logo.png" />

            </div>
            <div className="nav-items flex m-0 p-0  ">
                <ul className="list-none m-0 p-0 font-semibold">
                    <li className="inline-block mx-3 hover:text-pink-500 transition">
                        Online Status: {onlineStatus ? "✅" : "❗"}
                    </li>

                    <li className="inline-block mx-3">
                        <Link to="/" className="hover:text-pink-500 transition">Home</Link>
                    </li>

                    <li className="inline-block mx-3">
                        <Link to="/about" className="hover:text-pink-500 transition">About Us</Link>
                    </li>

                    <li className="inline-block mx-3">
                        <Link to="/contact" className="hover:text-pink-500 transition">Contact Us</Link>
                    </li>

                    <li className="inline-block mx-3">
                        <Link to="/grocery" className="hover:text-pink-500 transition">Grocery</Link>
                    </li>

                    <li className="inline-block mx-3 hover:text-pink-500 transition cursor-pointer">
                        Cart
                    </li>

                    <li className="inline-block mx-3">
                        <button
                        className="hover:text-pink-500 transition font-semibold"
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        >
                        {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;