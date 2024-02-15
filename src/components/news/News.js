import Image from "next/image";
import image1 from "../../assets/images/course-79-750x750.jpg";
import Title from "@/utils/title/Title";
import { CiCalendar } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";

const News = () => {
  return (
    <>
      <Title text={"Get News with EduBlink"} />
      <div className="grid grid-cols-3 gap-5 bg-[#fbfbfc] my-32">
        {/* card 1 */}
        <div className="relative flex justify-center">
          <Image
            className="rounded-2xl"
            width={400}
            height={800}
            src={image1}
            alt="image"
          />
          <div className="w-[80%] p-6 h-[66%] rounded-2xl absolute shadow-xl bg-white top-60">
            <p className="text-lg text-[#808080]">Science</p>
            <h3 className="text-xl font-semibold mt-3">
              Crafting Effective Learning Guide Line
            </h3>

            <div className="grid mt-5 gap-2 grid-cols-2">
              <div className="flex items-center gap-2">
                <CiCalendar className="text-xl" color="#1cb69a" />
                <h4>15 Nov, 2023</h4>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCommentDots className="text-xl" color="#1cb69a" />
                <h4>Com 2</h4>
              </div>
            </div>
            <p className="text-[#808080] mt-4">
              aConsectetur adipisicing elit, sed do eiusmod tempor inc...
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative flex justify-center">
          <Image
            className="rounded-2xl"
            width={400}
            height={800}
            src={image1}
            alt="image"
          />
          <div className="w-[80%] p-6 h-[66%] rounded-2xl absolute shadow-xl bg-white top-60">
            <p className="text-lg text-[#808080]">Science</p>
            <h3 className="text-xl font-semibold mt-3">
              Crafting Effective Learning Guide Line
            </h3>

            <div className="grid mt-5 gap-2 grid-cols-2">
              <div className="flex items-center gap-2">
                <CiCalendar className="text-xl" color="#1cb69a" />
                <h4>15 Nov, 2023</h4>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCommentDots className="text-xl" color="#1cb69a" />
                <h4>Com 2</h4>
              </div>
            </div>
            <p className="text-[#808080] mt-4">
              aConsectetur adipisicing elit, sed do eiusmod tempor inc...
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative flex justify-center">
          <Image
            className="rounded-2xl"
            width={400}
            height={800}
            src={image1}
            alt="image"
          />
          <div className="w-[80%] p-6 h-[66%] rounded-2xl absolute shadow-xl bg-white top-60">
            <p className="text-lg text-[#808080]">Science</p>
            <h3 className="text-xl font-semibold mt-3">
              Crafting Effective Learning Guide Line
            </h3>

            <div className="grid mt-5 gap-2 grid-cols-2">
              <div className="flex items-center gap-2">
                <CiCalendar className="text-xl" color="#1cb69a" />
                <h4>15 Nov, 2023</h4>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCommentDots className="text-xl" color="#1cb69a" />
                <h4>Com 2</h4>
              </div>
            </div>
            <p className="text-[#808080] mt-4">
              aConsectetur adipisicing elit, sed do eiusmod tempor inc...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
