import { setActiveMenu, setMobileMenu } from "../../app/features/othersSlice";

import { handleLogout } from "../../utils/functions";
import { indexPath } from "../../App";
import { profileMenu } from "../../utils/menu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import { useState } from "react";

const Navigation = ({ mobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClick = (item) => {
    dispatch(setActiveMenu(item));
    if (item) {
      dispatch(setMobileMenu(false));
      if (item === "post") {
        navigate(`/${indexPath}/post`);
      } else {
        navigate(`/${indexPath}/profile`);
      }
    }
  };
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
                  } else {
                    handleClick(item.path);
                  }
                }}
                className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/10 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5 text-lg">
                  {item.icon}
                  {item.name}
                </span>

                <span className={`${showSubmenu ? "-rotate-180 " : ""}`}>
                  {item.chevron}
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
                        handleClick(item.path);
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
export default Navigation;

// <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
// <RiProfileLine className="text-lg" /> Profile
// </li>
// <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
// <BiSpreadsheet className="text-lg" /> posts
// </li>
// <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
// <LuPencilLine className="text-lg" /> write
// </li>
// <li>
// <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 capitalize backdrop-blur-sm rounded-sm border- border-white/10 flex items-center justify-between gap-1.5">
//   <span className="flex items-center gap-1.5">
//     <PiGearBold className="text-lg" /> settings
//   </span>
//   <BiChevronDown className="text-lg" />
// </li>
// <ul className="submenu flex flex-col gap-y-2 pl-3">
//   <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
//     <LuKeyRound className="text-lg" />
//     Change password
//   </li>
//   <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
//     <MdOutlinePrivacyTip className="text-lg" /> Privacy policy
//   </li>
//   <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
//     <IoNewspaperOutline className="text-lg" /> Terms & conditions
//   </li>
//   <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
//     <GiNetworkBars className="text-lg" /> Data safety
//   </li>
//   <li className="w-full cursor-pointer py-2.5 px-2 text-md tracking-wide hover:bg-slate-100/90 transition-all duration-300 backdrop-blur-sm rounded-sm border- border-white/10 flex items-center gap-1.5">
//     <LuUserX className="text-lg" /> Delete your account
//   </li>
// </ul>
// </li>
