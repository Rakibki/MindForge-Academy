"use client"
// import CurrentUser from "@/utils/currentUser/CurrentUser";
import { IoIosSearch } from "react-icons/io";

const DashboardNavber = () => {
  // const {user} = CurrentUser();

  const handleClick = () => {
    const token = localStorage.getItem("token");

    const categorydata = {
      name: "Diploma_Academic_Course",
      description: "This is Diploma_Academic_Course",
    };

    fetch("https://softmaxshop.com/user/categories/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categorydata),
    })
      .then((res) => res?.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-full py-2 flex justify-between">
      <div className="flex gap-3 relative items-center">
        <input
          type="text"
          placeholder="Search For Items"
          className="rounded-full bg-[#f8fafc] border-[1px] border-[#e4e9f1] outline-[#ffa41f] text-[#6b7280] placeholder:text-[#6b7280] p-2.5 px-6"
          required
          name="password"
        />
        <div className="absolute right-4 top-[25%]">
          <IoIosSearch className="text-2xl text-[#6b7280] right-2" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[45px] overflow-hidden h-[45px]"></div>
        <div className="flex ml-2 flex-col">
          {/* <h2 className="">Md Rakib Mia</h2>
          <h2 className="text-[#838fa2] text-sm">Student</h2> */}
          <div>
            <button
              onClick={handleClick}
              className="py-3 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]"
            >
              create Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;
