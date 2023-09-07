import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function NavLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default NavLayout;
