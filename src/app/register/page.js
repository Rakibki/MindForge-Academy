"use client";
import Link from "next/link";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";

const page = () => {
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const mobile_number = e.target.mobile_number.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const Confirmpassword = e.target.Confirmpassword.value;

    if (password.length < 6) {
      return setError("It should be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return setError("It should contain at least one special character");
    }

    const data = {
      mobile_number: mobile_number,
      name: name,
      password: password,
      password2: Confirmpassword,
    };

    const res = await axios.post(
      "https://softmaxshop.com/user/register/",
      data
    );
    const token = res?.data?.token?.access;
    localStorage.setItem("token", token);
  };

  return (
    <div className="my-10 relative">
      <Link className="z-20" href={"/"}>
        <div className="absolute px-2 py-1 hover:border-[#2db880] cursor-pointer transition-all hover:text-[#2db880] gap-2 rounded-full border-[1px] flex items-center left-[45%] -top-3">
          <IoMdArrowBack />
          <p>Back to home</p>
        </div>
      </Link>
      <div className="bg-[#fff] p-10 shadow-xl md:w-[60%] w-[90%] lg:w-[40%] mx-auto">
        <form onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold text-black mb-4">Sign Up</h1>

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
              type="text"
              name="name"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Name"
            />
            <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
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

          <div className="relative mt-3">
            <input
              type="password"
              name="Confirmpassword"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Confirm password"
            />
            <CiLock className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="mt-4 mb-4">
            <p className="text-red-700 font-Poppins mb-2">{error}</p>
            <button
              type="submit"
              className="py-3 bg-[#1ab69d] hover:text-white transition-all text-[#fff] font-Poppins font-semibold w-full"
            >
              REGISTER NOW
            </button>
          </div>

          <h1 className="font-Poppins text-black text-lg text-center">
            Already registered?{" "}
            <Link
              className="hover:underline text-[#1ab69d] font-semibold"
              href={"/login"}
            >
              Go to log in
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default page;
