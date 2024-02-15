import Image from "next/image";
import instructor1 from "../../assets/images/team-01.webp";

const Instructors = () => {
  return (
    <div className="my-10 gap-3 grid grid-cols-4">
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
          src={instructor1}
        />
        <div>
          <h2 className="text-center mt-3">Jane Seymour</h2>
          <h2 className="text-[#8b8b8b] text-center mt-2">UI Designer</h2>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
