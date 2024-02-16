import NavItem from "@/utils/navItem/NavItem";
import { MdHome } from "react-icons/md";

const DashboardMenu = () => {
  return (
    <div>
      <NavItem text={"Home"} location={"dashboard"} Icon={MdHome} />
      <h2>Item</h2>
      <h2>Item</h2>
      <h2>Item</h2>
    </div>
  );
};

export default DashboardMenu;
