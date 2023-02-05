import React from "react";
import img1 from "../images/good.png";
const Submitted = () => {
  return (
    <div className=" absolute flex justify-center items-center w-[100vw] h-[100%] z-10 bg-firstBlue ">
      <div className="w-[60vw] flex flex-col justify-around items-center h-[75vh] shadow-lg bg-white rounded-lg">
        <img src={img1} className="h-56" alt="Done" />
        <p className="text-2xl font-semibold">Submitted Successfully</p>
        <p className="text-2xl">Your Tracking Number is : FBN/CDT/0001</p>
        <button className="h-14 w-[80%] text-2xl font-semibold  text-white my-6 bg-firstBlue rounded hover:bg-firstYellow hover:text-black">
          Done
        </button>
      </div>
    </div>
  );
};

export default Submitted;
