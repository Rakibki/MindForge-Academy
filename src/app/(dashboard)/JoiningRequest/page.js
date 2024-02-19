"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://softmaxshop.com/user/teachers/");
      const jsonData = await res.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleApprove = async (item) => {
    alert(item?.id)
    const res = await fetch(
      `https://softmaxshop.com/user/approved-teacher/${item?.id}`
    );
    // const data = await res?.json();
    console.log(res);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Status</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item?.id}>
                <th>{item?.id}</th>
                <td>{item?.approved_as_teacher}</td>
                <td>{item?.fullName}</td>
                <td>{item?.email}</td>
                <td>{item?.phone_number}</td>
                <td>
                  <button
                    onClick={() => handleApprove(item)}
                    className="py-3 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
