import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import logo from "../../assets/images/logo-dark.png";
import DashboardNavber from "@/components/dashboardNaver/DashboardNavber";
import Image from "next/image";
import CurrentUser from "@/utils/currentUser/CurrentUser";
import DashboardMenu from "@/components/dashboardMenu/DashboardMenu";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <div className=" mx-auto max-w-[1250px]">
          <DashboardNavber />
          <div className="grid gap-2 w-full grid-cols-11">
            <div className="col-span-2 h-screen w-full border-2 relative">
              <Link href={"/"}>
                <Image
                  className="p-3"
                  src={logo}
                  alt="logo"
                  width={100}
                  height={50}
                />
              </Link>
              <hr />

              <div className="p-3 flex flex-col">
                <DashboardMenu />
              </div>

              <div className="absolute p-3 bottom-2">
                <Link
                  href={`profile`}
                  className="mb-2transition-all font-semibold mb-3 flex gap-2 items-center text-[#515d6e] font-Inter text-base"
                >
                  <FaRegUser className="text-xl" /> <p>Profile</p>
                </Link>

                <div className="mb-3 transition-all font-semibold flex text-[#b91c1c] gap-2 items-center font-Inter text-base">
                  <CiLogin className="text-2xl" /> <p>Logout</p>
                </div>
              </div>
            </div>
            <div className="col-span-9 bg-[#f0f0fa] border-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
