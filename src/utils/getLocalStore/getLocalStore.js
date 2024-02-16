"use client";

const getLocalStore = () => {
  const token = localStorage.getItem("token");
  return token;
};

export default getLocalStore;
