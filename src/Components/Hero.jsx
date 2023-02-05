import React from "react";
const handleSubmit = (e) => {
  e.preventDefault();
};
const Hero = () => {
  return (
    <div className="mx-6 py-4 text-firstBlue">
      <p className="text-3xl mb-5 font-bold">Welcome User,</p>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="items-center bg-firstYellow shadow-md rounded-md w-[60vw] h-[60vh] flex flex-col justify-around"
        >
          <p className="text-2xl text-center font-bold">Track Order</p>
          <label
            htmlFor="card-id"
            className="text-firstBlue text-xl font-semibold mb-2"
          >
            Tracking ID
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="card-id"
            className="w-[85%] outline-firstYellow border-firstYellow border-2 rounded-md p-3"
            required
            id="card-id"
          />
          <input
            type="submit"
            value="Submit"
            className="px-10 my-10 h-14 cursor-pointer text-2xl  font-semibold rounded w-[85%] hover:bg-white hover:text-firstBlue bg-firstBlue text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
