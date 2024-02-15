"use client";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import axios from "axios";

const JoinTeacher = ({ modalIsOpen, afterOpenModal, closeModal, subtitle }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const data = {
      fullName: name,
      email: email,
      phone_number: parseInt(number),
    };

    console.log(data);

    axios
      .post("https://softmaxshop.com/user/teachers/", data)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="p-6 relative rounded-2xl w-[500px]">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-3">
              <input
                type="text"
                name="name"
                className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
                placeholder="Full Name"
              />
              <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
            </div>
            <div className="relative mt-3">
              <input
                type="email"
                name="email"
                className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
                placeholder="Enter Email"
              />
              <MdOutlineMailOutline className="absolute text-xl left-3 text-white top-[30%]" />
            </div>
            <div className="relative mt-3">
              <input
                type="number"
                name="number"
                className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
                placeholder="Enter Phone Number"
              />
              <FaPhone className="absolute text-xl left-3 text-white top-[30%]" />
            </div>
            <button
              type="submit"
              className="py-3 px-6 mt-4 flex items-center gap-2 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]"
            >
              <LuSend /> Send Requist
            </button>
          </form>
          <button className="absolute top-2 right-3" onClick={closeModal}>
            <MdOutlineClose className="text-20px" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default JoinTeacher;
