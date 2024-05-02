/* eslint-disable react/prop-types */
import { useState } from "react";
import { profileMenu } from "../../utils/menu";
import { useNavigate } from "react-router-dom";
import { indexPath } from "../../App";
import { handleLogout } from "../../utils/functions";

const MobileNavigation = ({ setActiveMenu, mobile }) => {
  const navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <>
      {!mobile && <h1 className="text-xl font-medium mb-5 px-2">My profile</h1>}
      <ul className={`${mobile ? "w-full" : "w-4/5"} flex flex-col  gap-y-1`}>
        {profileMenu.map((item, index) => {
          return (
            <li key={index}>
              <div
                onClick={() => {
                  if (item.name === "settings") {
                    setShowSubmenu(!showSubmenu);
                  }
                  handleClick(item.name);
                }}
                className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5 text-lg">
                  {item.icon}
                  {item?.name}
                </span>

                <span className={`${showSubmenu ? "-rotate-180 " : ""}`}>
                  {item?.chevron}
                </span>
              </div>
              <ul
                className={`flex flex-col gap-y-1 duration-300 transition-[height] pl-3 mt-2 ${
                  showSubmenu ? "h-auto w-auto" : "h-0 overflow-hidden"
                }`}
              >
                {item?.submenu?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        if (item.name === "logout") {
                          handleLogout();
                        }
                        handleClick(item.name);
                      }}
                      className="w-full cursor-pointer py-2.5 px-2 text-lg tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5"
                    >
                      {item.icon}
                      {item?.name?.charAt(0)?.toUpperCase() +
                        item?.name?.slice(1, item?.name?.length)?.toLowerCase()}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MobileNavigation;
