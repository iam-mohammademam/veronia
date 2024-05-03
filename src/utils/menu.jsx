import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { BiChevronDown, BiSpreadsheet } from "react-icons/bi";
import { IoExitOutline, IoNewspaperOutline } from "react-icons/io5";
import { LuKeyRound, LuPencilLine, LuUserX } from "react-icons/lu";

import { GiNetworkBars } from "react-icons/gi";
import { MdOutlinePrivacyTip } from "react-icons/md";
// import { RiQuillPenFill } from "react-icons/ri";
import { PiGearBold } from "react-icons/pi";

export const profileMenu = [
  {
    icon: <AiOutlineUser className="text-xl" />,
    name: "profile",
    path: "profile",
  },
  { icon: <BiSpreadsheet className="text-xl" />, name: "blogs", path: "blogs" },
  { icon: <LuPencilLine className="text-xl" />, name: "write", path: "post" },
  {
    icon: <PiGearBold className="text-xl" />,
    name: "settings",
    chevron: <BiChevronDown />,
    submenu: [
      { icon: <LuKeyRound className="text-xl" />, name: "change password" },
      {
        icon: <MdOutlinePrivacyTip className="text-xl" />,
        name: "privacy policy",
      },
      {
        icon: <IoNewspaperOutline className="text-xl" />,
        name: "terms of use",
      },
      { icon: <GiNetworkBars className="text-xl" />, name: "data safety" },
      { icon: <IoExitOutline className="text-xl" />, name: "logout" },
      { icon: <LuUserX className="text-xl" />, name: "delete your account" },
    ],
  },
  {
    icon: <AiOutlineQuestionCircle className="text-xl" />,
    name: "help & support",
  },
];
