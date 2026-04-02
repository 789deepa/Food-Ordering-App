import {useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnline();
    return (
        <div className="bg-white border-b border-[#FFD4B3] h-16 flex items-center justify-between px-10 sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#FF6B35] rounded-xl flex items-center justify-center text-white font-semibold text-lg">N</div>
                <span className="text-xl text-[#1a1a1a]" style={{fontFamily:"'Playfair Display',serif"}}>
                    Namaste<span className="text-[#FF6B35]">Food</span>
                </span>
            </div>
            <div className="nav-items flex gap-8">
                <ul className="list-none m-0 p-0 flex gap-8 items-center">
                    <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-[#555]">
                            {onlineStatus ? "Online" : "Offline"}
                        </span>
                    </li>

                    <li>
                        <Link to="/" className="text-sm font-medium text-[#666666] hover:text-[#FF6B35] transition">Home</Link>
                    </li>

                    <li>
                        <Link to="/about" className="text-sm font-medium text-[#666666] hover:text-[#FF6B35] transition">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="text-sm font-medium text-[#666666] hover:text-[#FF6B35] transition">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/grocery" className="text-sm font-medium text-[#666666] hover:text-[#FF6B35] transition">Grocery</Link>
                    </li>

                    <li className="text-sm font-medium text-[#666666] hover:text-[#FF6B35] transition cursor-pointer">
                        Cart
                    </li>

                    <li>
                        <button
                        className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FF8C42] border-none transition"
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