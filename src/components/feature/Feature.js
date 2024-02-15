import { MdOutlineComputer } from "react-icons/md";

const Feature = () => {
  return (
    <div className="grid gap-5 p-10 bg-[#1eb796] grid-cols-4">
      <div className="flex gap-2 border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <MdOutlineComputer size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>3020</h3>
          <h3>Online Courses</h3>
        </div>
      </div>
      <div className="flex gap-2 border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <MdOutlineComputer size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>3020</h3>
          <h3>Online Courses</h3>
        </div>
      </div>
      <div className="flex gap-2 border-r-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <MdOutlineComputer size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>3020</h3>
          <h3>Online Courses</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-[#33bea4] text-white p-4 rounded-full">
          <MdOutlineComputer size={"40px"} />
        </div>
        <div className="text-[#fff] font-medium text-xl">
          <h3>3020</h3>
          <h3>Online Courses</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
