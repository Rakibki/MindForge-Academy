import Image from "next/image";
import brand1 from "../../assets/images/brand-01.png";
import brand2 from "../../assets/images/brand-02.png";
import brand3 from "../../assets/images/brand-03.png";
import brand4 from "../../assets/images/brand-04.png";
import brand5 from "../../assets/images/brand-05.png";
import brand6 from "../../assets/images/brand-06.png";
import brand7 from "../../assets/images/brand-07.png";
import brand8 from "../../assets/images/brand-08.png";

const OurPartners = () => {
  return (
    <div className="grid items-center my-20 grid-cols-5">
      <div className="col-span-2">
        <p className="text-lg text-[#808080]">ABOUT US</p>
        <h1 className="text-3xl font-semibold">
          Learn & Grow Your Skills{" "}
          <span className="text-[#ee4a62]">From Anywhere</span>
        </h1>
        <p className="text-[#808080]">
          Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
          tempor incididunt labore dolore magna aliquaenim minim veniam quis
          nostrud exercitation ullamco laboris.
        </p>
      </div>
      <div className="col-span-3">
        {/* col-1 */}
        <div className="grid grid-cols-4">
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand1} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand2} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand3} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand4} />
          </div>
        </div>
        {/* col-2 */}
        <div className="grid grid-cols-4">
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand5} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand6} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand7} />
          </div>
          <div className="py-4 border-[1px] px-8">
            <Image width={100} height={200} alt="brand" src={brand8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
