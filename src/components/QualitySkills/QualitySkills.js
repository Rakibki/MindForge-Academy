import { FaArrowRight } from "react-icons/fa6";

const QualitySkills = () => {
  return (
    <div className="flex p-20 bg-[#eaf3f2] justify-center">
      <div>
        <h1 className="text-5xl mb-4 text-center font-semibold">
          Get Your Quality Skills Certificate <br />
          {/* <span className="text-[#ee4a62]">From Anywhere</span> */}
        </h1>
        <h1 className="text-5xl mb-4 text-center text-[#ee4a62] font-semibold">
          Through EduBlink
        </h1>

        <div className="flex mt-4 justify-center">
          <button className="py-3 px-6 flex gap-3 items-center rounded-lg hover:opacity-60 text-white bg-[#1ab69d]">
            Get started now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualitySkills;
