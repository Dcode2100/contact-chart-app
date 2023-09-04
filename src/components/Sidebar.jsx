import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectSidebar } from "../redux/sidebarSlice";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSidebar);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`flex max-md:absolute max-md:top-0 max-md:left-0 max-md:z-10 max-md:w-full ${
        isOpen ? "" : "hidden"
      }`}
    >
      <nav
        className={`bg-background relative text-text w-[20rem] max-md:w-[40rem] flex items-center flex-col h-[100vh] max-xs:w-full`}
      >
        <div className=" flex relative w-full justify-center items-center text-4xl  p-4 ">
          <Link to="/">
            <h3 className=" ">Sidebar</h3>
          </Link>
          <Button
            style={` bg-primary  text-secondary  absolute flex justify-center items-center top-4 h-[60%] right-2 aspect-square right-0 text-xl md:hidden ${
              !isOpen && "hidden"
            } `}
            onClick={handleToggleSidebar}
            label={<RxCross2 />}
          />
        </div>
        <ul className="flex flex-col mt-5 w-full items-center relative">
          <li className="w-full">
            <Link
              to="/dashboard"
              className="text-text h-full flex justify-center w-full py-4 hover:bg-primary hover:text-white text-xl"
            >
              Charts and Map
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/contacts"
              className="text-text h-full flex justify-center w-full py-4 hover:bg-primary hover:text-white text-xl"
            >
              Contacts
            </Link>
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
