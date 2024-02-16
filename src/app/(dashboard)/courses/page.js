"use client";
import axios from "axios";

const page = () => {
  const token = localStorage.getItem("token");

  fetch("https://softmaxshop.com/user/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: true,
  }).then((res) => console.log(res));

  return <div>dfsdfsdfsdf</div>;
};

export default page;
