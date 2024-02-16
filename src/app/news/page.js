"use client";
import axios from "axios";
import CurrentUser from "@/utils/currentUser/CurrentUser";
import { useEffect, useState } from "react";

const page = () => {
  // const token = localStorage.getItem("token");
  // fetch("https://softmaxshop.com/user/courses/", {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res?.json())
  //   .then((data) => console.log(data));

  const token = localStorage.getItem("token");
  const [course, setCouses] = useState([]);

  useEffect(() => {
    fetch("https://softmaxshop.com/user/categories/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res?.json())
      .then((data) => setCouses(data));
  }, []);

  console.log(course);

  // const user = CurrentUser();
  // console.log(user);

  return <div>dfsdfsdfsdf</div>;
};

export default page;
