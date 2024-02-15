"use client";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useState } from "react";

const CurrentUser = () => {
  const [user, setUser] = useState("");
  const LsToken = localStorage.getItem("token");
  const decoded = jwtDecode(LsToken);
  axios
    .get(`https://softmaxshop.com/user/student/${decoded?.user_id}/`)
    .then((res) => setUser(res?.data?.student));


  return user;
};

export default CurrentUser;
