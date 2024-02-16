import NavItem from "@/utils/navItem/NavItem";
import { MdHome } from "react-icons/md";
import { IoIosList } from "react-icons/io";

const DashboardMenu = () => {
  return (
    <div>
      <NavItem text={"Home"} location={"dashboard"} Icon={MdHome} />
      <NavItem
        text={"Joining Request"}
        location={"JoiningRequest"}
        Icon={IoIosList}
      />
    </div>
  );
};

export default DashboardMenu;
