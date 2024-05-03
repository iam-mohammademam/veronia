/* eslint-disable react/prop-types */

import Navigation from "./navigation";
import Posts from "./blogs";
import Profile from "./profile";
import { useSelector } from "react-redux";

const Account = () => {
  const { activeMenu } = useSelector((state) => state.others);

  return (
    <div className="w-screen flex min-h-screen md:px-[10%] px-[5%] p-5 gap-5 flex-nowrap relative">
      <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 max-[500px]:hidden shrink-0  border-r border-black/10">
        <Navigation />
      </div>
      <div className="w-full">
        {activeMenu === "profile" ? (
          <Profile />
        ) : activeMenu === "blogs" ? (
          <Posts />
        ) : (
          <>
            <div className="flex items-center justify-center text-center h-full">
              <h1 className="text-lg font-medium">
                Sorry, <br /> This function is still under development
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Account;
