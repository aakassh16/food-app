import { React, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStaus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="flex items-center">
        <img className="w-[100px] mx-6 my-2" src={LOGO_URL} alt="logo-img" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/food-app">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/food-app/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/food-app/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/food-app/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login"
            onClick={() => {
              btnName === "Login" ?
                setbtnName("Logout") :
                setbtnName("Login")
            }}>{btnName}</button>
             <li className="px-4 font-bold">
            <Link className="links">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;