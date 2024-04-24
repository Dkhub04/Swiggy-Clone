import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [Loginbtn, setLoginbtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-section">
                <img className="logo" src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"></img>
            </div>
            <div className="tags">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="btn" onClick={() => {
                        Loginbtn == "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
                    }}>{Loginbtn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;