import { Routes, Route, useLocation } from "react-router-dom";
import Contacts from "../pages/Contacts";
import Dashboard from "../pages/Charts";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";
import { AiOutlineMenu } from "react-icons/ai";

import Maps from "../pages/Maps";

function AppRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  let headingText = "Heading";
  if (path === "/contacts") {
    headingText = "Contact Page";
  } else if (path === "/charts") {
    headingText = "Charts Page";
  } else if (path === "/maps") {
    headingText = "Maps Page";
  }

  return (
    <div className="parent relative w-full h-full">
      <div className="header-container relative h-[10vh]">
        <Button
          className={` md:hidden absolute h-full flex text-secondary  justify-center items-center aspect-square top-0 left-0 text-xl `}
          onClick={handleToggleSidebar}
          label={<AiOutlineMenu />}
        />
        <h2 className="w-full flex justify-center items-center h-full text-xl bg-primary text-secondary">
          {headingText}
        </h2>
      </div>
      <div className="outside-container p-4 w-full flex flex-grow relative sm:h-[90vh] max-lg:min-h-[90vh]  ">
        <div className="inside-container border h-full relative w-full rounded-lg border-primary ">
          <Routes>

            <Route path="/" element={<Contacts />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/charts" element={<Dashboard />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppRoutes;
