"use client";

import { useEffect, useState } from "react";

const getCourses = () => {
  const token = localStorage.getItem("token");
  const [course, setCouses] = useState([]);

  useEffect(() => {
    fetch("https://softmaxshop.com/user/courses/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res?.json())
      .then((data) => setCouses(data));
  }, []);

  return course;
};

export default getCourses;
