import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName,setBtnName] = useState("login");
  const {logInUser} = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="h-40 flex justify-between bg-pink-100 shadow-md sm:bg-gray-200">
      <div className="logo-container">
        <img  className="w-40" src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=ais_user"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            onlineStatus: {onlineStatus? " ✅": "🔴 "}
          </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link> </li>
          <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart-({cartItems.length}) items </Link>  </li>

        <button onClick={()=>{
          if(btnName==="login"){
          setBtnName("logout");}
          else{
            setBtnName("login");
          }
        }}>
{btnName}
        </button>
        <li className="font-bold px-4">{logInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;