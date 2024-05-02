import { BiChevronDown, BiSpreadsheet } from "react-icons/bi";
// import { RiQuillPenFill } from "react-icons/ri";
import { PiGearBold } from "react-icons/pi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoExitOutline, IoNewspaperOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { LuUserX, LuKeyRound, LuPencilLine } from "react-icons/lu";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";

export const profileMenu = [
  { icon: <AiOutlineUser className="text-xl" />, name: "profile" },
  { icon: <BiSpreadsheet className="text-xl" />, name: "blogs" },
  { icon: <LuPencilLine className="text-xl" />, name: "write" },
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
