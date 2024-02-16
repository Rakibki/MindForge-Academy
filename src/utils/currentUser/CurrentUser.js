"use client";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const CurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState();
  const LsToken = localStorage.getItem("token");
  const decoded = jwtDecode(LsToken);

  useEffect(() => {
    setLoadding(true);

    axios
      .get(`https://softmaxshop.com/user/student/${decoded?.user_id}/`)
      .then((res) => setUser(res?.data?.student));
    setLoadding(false);
  }, []);

  if ((loadding, !user)) {
    return <Loader />;
  }
  return { user, decoded };
};

export default CurrentUser;
