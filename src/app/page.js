import Course from "@/components/Course/Course";
import Instructors from "@/components/Instructors/Instructors";
import LearnGrow from "@/components/LearnGrow/LearnGrow";
import Banner from "@/components/banner/Banner";
import Feature from "@/components/feature/Feature";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <LearnGrow />
      <Course />
      <Instructors />
    </div>
  );
};

export default HomePage;
