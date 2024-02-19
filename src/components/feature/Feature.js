import { MdOutlineComputer } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiUsersFill } from "react-icons/pi";

const Feature = () => {
  return (
    <div className="grid gap-5 p-10 bg-[#1eb796] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex gap-2 md:border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <MdOutlineComputer size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>3020</h3>
          <h3>Online Courses</h3>
        </div>
      </div>
      <div className="flex gap-2 md:border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <FaUsers size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>Top </h3>
          <h3>Instructors</h3>
        </div>
      </div>
      <div className="flex gap-2 md:border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <AiFillSafetyCertificate size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>Online </h3>
          <h3>Certifications</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <PiUsersFill size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>6,000</h3>
          <h3>Membership</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
