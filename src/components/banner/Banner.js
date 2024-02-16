import { FaChevronRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://demo.edublink.co/wp-content/uploads/2023/05/bg-image-17.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[700px]">
          <h1 className="mb-5 text-5xl font-bold">
            Get 2500+ Best Online Courses From EduBlink
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center">
            <button className="py-3 flex items-center gap-2 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]">
              Find courses <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
