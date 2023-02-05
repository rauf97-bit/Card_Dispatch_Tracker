import React from "react";
import logo from "../images/logo.png";
const inputArr = [
  { label: "Firstname", type: "text", name: "firstname" },
  { label: "Lastname", type: "text", name: "lastname" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone No.", type: "tel", name: "phonenumber" },
  { label: "Branch No.", type: "text", name: "branch-num" },
  { label: "Branch Location", type: "text", name: "branch-location" },
];
const submitHandler = (e) => {
  e.preventDefault();
};
export const ApplyForm = () => {
  return (
    <div className="">
      <div className="mx-20 mt-20 rounded shadow-lg bg-white">
        <div className="header mb-20 flex items-end justify-between ml-20">
          <p className="text-3xl font-semibold text-firstBlue">
            FBN Card Application Portal
          </p>
          <img src={logo} alt="LOGO" className="w-64 h-24 rounded-r " />
        </div>
        <form onSubmit={submitHandler} className="pb-10 px-20">
          {inputArr.map((item) => (
            <div key={item.name} className="flex flex-col mb-2">
              <label
                htmlFor={item.name}
                className="text-firstBlue text-xl font-semibold mb-2"
              >
                {item.label}
                <span className="text-red-600">*</span>
              </label>
              <input
                type={item.type}
                name="fullname"
                className="w-[85%] outline-firstYellow border-firstYellow border-2 rounded-md p-3"
                required
                id={item.name}
              />
            </div>
          ))}
          <input
            type="submit"
            value="Submit"
            className="px-10 my-10 h-14 cursor-pointer text-2xl font-semibold rounded w-[85%] bg-firstYellow text-white hover:bg-firstBlue"
          />
        </form>
      </div>
    </div>
  );
};
