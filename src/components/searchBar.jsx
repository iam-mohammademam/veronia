import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexPath } from "../App";
import { IoSearchOutline } from "react-icons/io5";

const SeachBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex items-center gap-2 border border-black/30 rounded-3xl overflow-hidden h-10">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query) {
              navigate(`/${indexPath}/search/${query}`);
            }
          }}
          placeholder="Search for blogs"
          className="bg-transparent outline-none border-none pl-3 placeholder-slate-900 w-full"
        />
        <div
          onClick={() => {
            if (query) {
              navigate(`/${indexPath}/search/${query}`);
            }
          }}
          className="bg-black h-full px-6 shrink-0 flex items-center justify-center rounded-r-full text-white cursor-pointer"
        >
          <IoSearchOutline className="text-lg" />
        </div>
      </div>
    </>
  );
};
export default SeachBar;
