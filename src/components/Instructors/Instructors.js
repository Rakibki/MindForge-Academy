import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const Instructors = () => {
  return (
    <div className="mb-20">
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide className="shadow-xl my-10" key={item?._id}>
              <Link to={`/PackageDetails/${item?._id}`}>
                <div>
                  <div className="overflow-hidden">
                    <img
                      className="hover:scale-125 transition-all"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#3fd0d4] text-white flex">
                    <div className="flex mx-auto items-center text-lg gap-1">
                      <div className="flex gap-1 mr-3 items-center">
                        <FaRegCalendar className="text-base" /> <h1>1</h1>
                      </div>
                      <div className="flex gap-1 mr-3 items-center">
                        <FaRegUser className="text-base" /> <h1>11</h1>
                      </div>
                      <div className="flex gap-1 mr-3 items-center">
                        <IoLocationOutline className="text-base" />
                        <h1>Skling</h1>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div>
                      <h2 className="text-xl font-bold">{item?.title}</h2>
                      <p className="text-[#505050] mt-2 font-Poppins">
                        {item?.desc?.slice(0, 65)}...
                      </p>
                    </div>
                    <div className="flex mt-2 items-center gap-2">
                      <div className="font-bold">${item?.price}</div>
                      <div className="flex font-bold gap-1 items-center">
                        <FaStar />
                        {item?.ratting}Good
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Instructors;
