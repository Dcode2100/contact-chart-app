import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectSidebar } from "../redux/sidebarSlice";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";


const CustomLink = ({ className, path, children }) => {
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSidebar);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`flex max-md:absolute max-md:top-0 max-md:left-0 max-md:z-10 max-md:w-full ${isOpen ? "" : "hidden"
        }`}
    >
      <nav
        className={`bg-background relative text-text w-[20rem] max-md:w-[40rem] flex items-center flex-col h-[100vh] max-xs:w-full`}
      >
        <div className=" flex relative w-full justify-center items-center text-4xl  p-3 mb-5">
          <CustomLink className="" path="/">
            <h3 className="">Sidebar</h3>
          </CustomLink>
          <Button
            className={` bg-primary  text-secondary  absolute flex justify-center items-center top-3 h-[60%] right-2 aspect-square text-xl md:hidden ${!isOpen && "hidden"
              } `}
            onClick={handleToggleSidebar}
            label={<RxCross2 />}
          />
        </div>
        <ul className="flex flex-col  w-full  border-t border-black items-center relative">
          <li className="w-full border-b border-black">
            <CustomLink
              className="text-text h-full flex justify-center w-full py-4 hover:bg-primary hover:text-white text-xl"
              path="/contacts"
            >
              Contacts
            </CustomLink>
          </li>
          <li className="w-full border-b border-black">
            <CustomLink
              className="text-text h-full flex justify-center w-full py-4 hover:bg-primary hover:text-white text-xl"
              path="/charts"
            >
              Charts
            </CustomLink>
          </li>
          <li className="w-full border-b border-black">
            <CustomLink
              className="text-text h-full flex justify-center w-full py-4 hover:bg-primary hover:text-white text-xl"
              path="/maps"
            >
              Map
            </CustomLink>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="z-10 bg-black opacity-20 md:hidden w-full max-xs:hidden"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;