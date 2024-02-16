"use client";
import Image from "next/image";
import logo from "../../assets/images/logo-dark.png";
import Link from "next/link";
import Head from "./Head";
import Button from "../ui/button/Button";
import JoinTeacher from "../modals/joinTeacher/JoinTeacher";
import { useState } from "react";

const Navber = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navItems = (
    <div className="flex gap-3">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/courses"}>Courses</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </div>
  );

  return (
    <>
      <div className="navbar bg-white shadow-xl p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image width={150} height={60} alt="logo" src={logo} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex box-border gap-3">
          <button
            onClick={openModal}
            className="py-3 px-6 box-border rounded-lg text-[#1ab69d] hover:opacity-60 border-[1px] border-[#1ab69d]"
          >
            Join
          </button>
          <Link href={"/login"}>
            <button className="py-3 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]">
              Login
            </button>
          </Link>
        </div>
      </div>

      <JoinTeacher
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        subtitle={subtitle}
      />
    </>
  );
};

export default Navber;
