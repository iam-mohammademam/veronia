import { useDispatch, useSelector } from "react-redux";

import { IoExitOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { LuPencilLine } from "react-icons/lu";
import Navigation from "../pages/account/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import { handleLogout } from "../utils/functions";
import { indexPath } from "../App";
import logo from "../assets/logo.png";
import { setMobileMenu } from "../app/features/othersSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedInUser, mobileMenu } = useSelector((state) => state.others);

  return (
    <div className="w-screen md:px-[10%] px-[5%] flex items-center justify-between bg-[#302f2f] text-white py-3 border- border-black/10 shadow-md shadow-gray-300/20 relative">
      <div className="flex items-center gap-5">
        <img
          src={logo}
          onClick={() => navigate(`${indexPath}`)}
          alt="logo"
          className="w-[10rem] cursor-pointer"
        />
      </div>
      {loggedInUser?._id ? (
        <>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/${indexPath}/post`)}
              className="flex items-center gap-1.5 font-medium rounded-3xl px-4 py-1 hover:bg-gray-200/10 bg-gray-200/30 transition-colors duration-200"
            >
              <LuPencilLine className="text-lg" /> write
            </button>
            <button
              onClick={() => {
                navigate(`/${indexPath}`);
                handleLogout();
                location.reload();
              }}
              className="bg-gray-200/30 hidden items-center gap-1.5 font-medium rounded-3xl px-4 py-1 hover:bg-gray-200/10 transition-colors duration-200 md:flex"
            >
              <IoExitOutline className="text-lg" /> Logout
            </button>
            {/* profile icon for large screen */}
            <button
              onClick={() => {
                navigate(`/${indexPath}/profile`);
              }}
              className="overflow- md:ml-2 min-[499px]:block hidden bg-black"
            >
              <img
                src={loggedInUser?.avatar}
                alt=""
                className="h-12 w-12 rounded-full bg-black"
              />
            </button>
            {/* profile icon for small screen */}
            <button
              onClick={() => {
                dispatch(setMobileMenu(!mobileMenu));
              }}
              className="overflow- md:ml-2 relative group/btn hidden max-[500px]:block bg-black"
            >
              <img
                src={loggedInUser?.avatar}
                alt=""
                className="h-12 w-12 rounded-full bg-black"
              />
              <div className="absolute group-hover/btn:bg-gray-300 duration-300 transition-all -bottom-1 -right-1 bg-gray-200/80 h-6 w-6 flex items-center justify-center rounded-full">
                {mobileMenu ? (
                  <LiaTimesSolid className="text-lg text-black" />
                ) : (
                  <RiMenu5Fill className="text-xl text-black" />
                )}
              </div>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/${indexPath}/sign-in`)}
            className="hover:bg-gray-200/10 bg-gray-200/30 capitalize rounded-3xl px-5 py-1 hover:bg-black transition-colors duration-200 whitespace-nowrap"
          >
            sign in
          </button>
          <button
            onClick={() => navigate(`/${indexPath}/sign-up`)}
            className=" capitalize rounded-3xl px-5 py-1 hover:bg-gray-200/10 bg-gray-200/30 duration-200 transition-colors whitespace-nowrap"
          >
            sign up
          </button>
        </div>
      )}
      <div
        className={`${
          mobileMenu ? "left-0" : "left-full"
        }  absolute max-[500px]:block hidden top-full text-white duration-300 transition-all px-[5%] pt-5 w-full h-screen bg-black z-30`}
      >
        <Navigation mobile={true} />
      </div>
    </div>
  );
};
export default Header;
