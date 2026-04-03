import {useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnline();
    return (
        <div className="border-b border-brand-border bg-brand-darker h-16 flex items-center justify-between px-10 sticky top-0 z-50 shadow-card">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-brand-accent rounded-xl flex items-center justify-center text-brand-dark font-semibold text-lg hover:bg-brand-accent-light transition-colors duration-200">N</div>
                <span className="text-xl font-semibold text-brand-text" style={{fontFamily:"'Playfair Display',serif"}}>
                    Namaste<span className="text-brand-accent">Food</span>
                </span>
            </div>
            <div className="nav-items flex gap-8">
                <ul className="list-none m-0 p-0 flex gap-8 items-center">
                    <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-sm text-brand-text-secondary">
                            {onlineStatus ? "Online" : "Offline"}
                        </span>
                    </li>

                    <li>
                        <Link to="/" className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors duration-200">Home</Link>
                    </li>

                    <li>
                        <Link to="/about" className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors duration-200">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors duration-200">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/grocery" className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors duration-200">Grocery</Link>
                    </li>

                    <li className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors duration-200 cursor-pointer">
                        Cart
                    </li>

                    <li>
                        <button
                        className="bg-brand-accent text-brand-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-accent-light shadow-card hover:shadow-elevated transition-all duration-200"
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