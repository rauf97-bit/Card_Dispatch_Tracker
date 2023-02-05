import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="bg-firstBlue   flex items-center justify-between">
      <p className="text-3xl ml-6 font-semibold text-white">
        FBN Card Dispatch Tracker
      </p>
      <img src={logo} alt="LOGO" className="w-64 h-24 " />
    </div>
  );
};

export default Header;
