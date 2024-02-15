import Image from "next/image";
import about1 from "../../assets/images/about-01.webp";
import about2 from "../../assets/images/Image-2.png";
import { FaArrowRight } from "react-icons/fa6";

const LearnGrow = () => {
  return (
    <div className="grid gap-14 px-14 my-10 bg-[#fefefe] items-center grid-cols-2">
      <div>
        <div className="relative">
          <Image width={"100%"} height={"100%"} src={about1} alt="aboutF" />
          <div className="absolute -top-7 -right-4">
            <Image width={"100%"} height={"100%"} src={about2} alt="aboutF" />
          </div>
          <div className="p-10 bg-white shadow-2xl absolute -bottom-7 -right-3 rounded-xl">
            <h1>
              29+ <br /> Wonderful Awards
            </h1>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg text-[#808080]">ABOUT US</p>
        <h1 className="text-5xl font-semibold">
          Learn & Grow Your Skills{" "}
          <span className="text-[#ee4a62]">From Anywhere</span>
        </h1>
        <p className="text-[#808080]">
          Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
          tempor incididunt labore dolore magna aliquaenim minim veniam quis
          nostrud exercitation ullamco laboris.
        </p>

        <div className="mt-4">
          <div className="flex mb-2 gap-4 items-center">
            <FaArrowRight color="#f8b81f" size={"20px"} />
            <h2 className="text-lg text-[#181818]">Expert Trainers</h2>
          </div>
          <div className="flex mb-2 gap-4 items-center">
            <FaArrowRight color="#f8b81f" size={"20px"} />
            <h2 className="text-lg text-[#181818]">Online Remote Learning</h2>
          </div>
          <div className="flex mb-2 gap-4 items-center">
            <FaArrowRight color="#f8b81f" size={"20px"} />
            <h2 className="text-lg text-[#181818]">Lifetime Access</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnGrow;
