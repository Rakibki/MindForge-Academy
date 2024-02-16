import Image from "next/image";
import instructor1 from "../../assets/images/team-01.webp";
import instructor2 from "../../assets/images/team-02.webp";
import instructor3 from "../../assets/images/team-03.webp";
import instructor4 from "../../assets/images/team-04.webp";
import Title from "@/utils/title/Title";

const Instructors = () => {
  return (
    <div className="mt-32">
      <div className="mb-6">
        <Title text={"Course Instructors"} />
      </div>
      <div className="gap-3 grid grid-cols-4">
        <div className="p-3">
          <Image
            className="rounded-2xl"
            width={300}
            height={300}
            alt="instructor"
            src={instructor1}
          />
          <div>
            <h2 className="text-center mt-3">Jane Seymour</h2>
            <h2 className="text-[#8b8b8b] text-center mt-2">UI Designer</h2>
          </div>
        </div>

        <div className="p-3">
          <Image
            className="rounded-2xl"
            width={300}
            height={300}
            alt="instructor"
            src={instructor2}
          />
          <div>
            <h2 className="text-center mt-3">Edward Norton</h2>
            <h2 className="text-[#8b8b8b] text-center mt-2">Web Developer</h2>
          </div>
        </div>

        <div className="p-3">
          <Image
            className="rounded-2xl"
            width={300}
            height={300}
            alt="instructor"
            src={instructor3}
          />
          <div>
            <h2 className="text-center mt-3">Penelope Cruz</h2>
            <h2 className="text-[#8b8b8b] text-center mt-2">
              Digital Marketer
            </h2>
          </div>
        </div>

        <div className="p-3">
          <Image
            className="rounded-2xl"
            width={300}
            height={300}
            alt="instructor"
            src={instructor4}
          />
          <div>
            <h2 className="text-center mt-3">John Travolta</h2>
            <h2 className="text-[#8b8b8b] text-center mt-2">
              WordPress Expert
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
