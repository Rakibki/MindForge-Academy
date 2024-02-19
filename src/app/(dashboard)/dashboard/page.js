"use client";
import CurrentUser from "@/utils/currentUser/CurrentUser";
import getCourses from "@/utils/getCourses/getCourses";
import { getLocalStor } from "@/utils/localStoreg.js/localStoreg";
import React from "react";

const Page = () => {
  const data = getCourses();
  const token = localStorage.getItem("token");
  const user = CurrentUser();
  const myCouses = getLocalStor("myCouses");

  const handleEnroll = async (id) => {
    const studentdata = {
      student: user?.user?.id.toString(),
      course: id.toString(),
      status: "enrolled",
    };

    const res = await fetch("https://softmaxshop.com/user/enroll-course/", {
      method: "POST",
      body: JSON.stringify(studentdata),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    await res?.json();
    myCouses.push(id);
    const myCousesStr = JSON.stringify(myCouses);
    localStorage.setItem("myCouses", myCousesStr);
  };

  return (
    <div className="grid p-4 gap-2 grid-cols-2">
      {data?.map((item, index) => {
        const buttonText = myCouses.includes(item?.id) ? "My Couse" : "Enroll";
        return (
          <div className="border-[1px] rounded-xl p-4" key={index}>
            <h2>{item?.title}</h2>
            <button onClick={() => handleEnroll(item?.id)} className="btn">
              {buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
