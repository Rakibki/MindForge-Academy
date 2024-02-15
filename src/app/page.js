import Course from "@/components/Course/Course";
import Instructors from "@/components/Instructors/Instructors";
import LearnGrow from "@/components/LearnGrow/LearnGrow";
import OurPartners from "@/components/OurPartners/OurPartners";
import Banner from "@/components/banner/Banner";
import Feature from "@/components/feature/Feature";
import News from "@/components/news/News";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <LearnGrow />
      <Course />
      <Instructors />
      <OurPartners />
      <News />
    </div>
  );
};

export default HomePage;
