import Course from "@/components/Course/Course";
import Instructors from "@/components/Instructors/Instructors";
import LearnGrow from "@/components/LearnGrow/LearnGrow";
import OurPartners from "@/components/OurPartners/OurPartners";
import Banner from "@/components/banner/Banner";
import Feature from "@/components/feature/Feature";
import News from "@/components/news/News";
import Footer from "@/components/shared/Footer";
import Navber from "@/components/shared/Navber";
import CurrentUser from "@/utils/currentUser/CurrentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = async () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Feature />
      <LearnGrow />
      {/* <Course /> */}
      <Instructors />
      <OurPartners />
      <News />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
