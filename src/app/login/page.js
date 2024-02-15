"use client";
import Link from "next/link";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";

const page = () => {
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const mobile_number = e.target.mobile_number.value;
    const password = e.target.password.value;
    const data = { mobile_number: mobile_number, password: password };

    const res = await axios.post(" https://softmaxshop.com/user/login/", data);
    console.log(res?.data);
  };

  return (
    <div className="my-10">
      <div className="bg-[#3fd0d4] p-10 w-[50%] mx-auto">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-white mb-4">Sign In</h1>

          <div className="relative mt-3">
            <input
              type="number"
              name="mobile_number"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Mobile Number"
            />
            <FaPhone className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="password"
              name="password"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Password"
            />
            <CiLock className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="mt-3 mb-4">
            <p className="font-Poppins mb-2 font-medium text-red-700">
              {error}
            </p>
            <button
              type="submit"
              className="py-3 hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full"
            >
              LOGIN NOW
            </button>
          </div>
          <h1 className="font-Poppins text-white text-center">
            New here?{" "}
            <Link className="hover:underline font-semibold" href={"/register"}>
              Create a New Account
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default page;
