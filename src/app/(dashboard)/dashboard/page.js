"use client";
import CurrentUser from "@/utils/currentUser/CurrentUser";
import getCourses from "@/utils/getCourses/getCourses";
import React from "react";

const Page = () => {
  const data = getCourses();
  const token = localStorage.getItem("token");
  const user = CurrentUser();

  const handleEnroll = async (id) => {
    const studentdata = {
      student: user?.user?.id.toString(),
      course: id.toString(),
      status: "enrolled",
    };

    const res = await fetch(
      "https://softmaxshop.com/user/enroll-course/",
      studentdata,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res?.json();
    console.log(result);
  };

  return (
    <div className="grid p-4 gap-2 grid-cols-2">
      {data?.map((item, index) => {
        return (
          <div className="border-[1px] rounded-xl p-4" key={index}>
            <h2>{item?.title}</h2>
            <button onClick={() => handleEnroll(item?.id)} className="btn">
              Enroll
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
