import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [Loginbtn, setLoginbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-lg bg-yellow-200">
            <div className="logo-section">
                <Link to="/"><img className="w-40 bg-slate-500" src="https://i.pinimg.com/736x/eb/4f/74/eb4f749fd1c95eefe5cccbcd325d8299.jpg"></img></Link>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-6">
                    <li className="px-6">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6"><Link to="/about">About us</Link></li>
                    <li className="px-6"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-6">Cart</li>
                    <button className="px-6" onClick={() => {
                        Loginbtn == "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
                    }}>{Loginbtn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;