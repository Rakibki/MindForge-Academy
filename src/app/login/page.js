"use client";
import Link from "next/link";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const page = () => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const mobile_number = e.target.mobile_number.value;
    const password = e.target.password.value;
    const data = { mobile_number: mobile_number, password: password };

    const res = await axios.post(" https://softmaxshop.com/user/login/", data);
    console.log(res?.data);
    const token = res?.data?.token?.access;
    localStorage.setItem("token", token);
    push("/dashboard");
  };

  return (
    <div className="my-10 relative">
      <Link className="z-20" href={"/"}>
        <div className="absolute px-2 py-1 hover:border-[#2db880] cursor-pointer transition-all hover:text-[#2db880] gap-2 rounded-full border-[1px] flex items-center left-[45%] -top-3">
          <IoMdArrowBack />
          <p>Back to home</p>
        </div>
      </Link>

      <div className="bg-[#fff] shadow-2xl p-10 md:w-[60%] w-[90%] lg:w-[40%] mx-auto">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-black mb-4">Sign In</h1>

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
              className="py-3 bg-[#2db880] text-white transition-all font-Poppins font-semibold w-full"
            >
              LOGIN NOW
            </button>
          </div>
          <h1 className="font-Poppins text-black text-center">
            New here?{" "}
            <Link
              className="hover:underline text-lg text-[#2db880] font-semibold"
              href={"/register"}
            >
              Create a New Account
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default page;
