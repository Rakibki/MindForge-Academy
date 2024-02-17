// ___________________ student start ______________

"use client";
// import CurrentUser from "@/utils/currentUser/CurrentUser";
// import getCourses from "@/utils/getCourses/getCourses";
// import { getLocalStor } from "@/utils/localStoreg.js/localStoreg";
// import React from "react";

// const Page = () => {
//   const data = getCourses();
//   const token = localStorage.getItem("token");
//   const user = CurrentUser();
//   const myCouses = getLocalStor("myCouses");

//   const handleEnroll = async (id) => {
//     const studentdata = {
//       student: user?.user?.id.toString(),
//       course: id.toString(),
//       status: "enrolled",
//     };

//     const res = await fetch("https://softmaxshop.com/user/enroll-course/", {
//       method: "POST",
//       body: JSON.stringify(studentdata),
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     await res?.json();
//     myCouses.push(id);
//     const myCousesStr = JSON.stringify(myCouses);
//     localStorage.setItem("myCouses", myCousesStr);
//   };

//   return (
//     <div className="grid p-4 gap-2 grid-cols-2">
//       {data?.map((item, index) => {
//         const buttonText = myCouses.includes(item?.id) ? "My Couse" : "Enroll";
//         return (
//           <div className="border-[1px] rounded-xl p-4" key={index}>
//             <h2>{item?.title}</h2>
//             <button onClick={() => handleEnroll(item?.id)} className="btn">
//               {buttonText}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Page;
// ___________________ student End ______________

// ___________________ Admin End ______________

import React from "react";

const Page = () => {
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
    <div>
      <button
        onClick={handleClick}
        className="py-3 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]"
      >
        create Course
      </button>
    </div>
  );
};

export default Page;
// ___________________ Admin End ______________
