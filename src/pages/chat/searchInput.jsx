/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";
import { PiGearSix } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { indexPath } from "../../App";

const SearchInput = ({ query, setQuery }) => {
  const navigate = useNavigate();
  return (
    <div className=" h-fit shrink-0 flex flex-col gap-y-5 py-3 mb-1 border-b">
      <div className="flex items-center justify-between px-3">
        <h1
          onClick={() => {
            navigate(`/${indexPath}/chat`);
          }}
          className="font-medium text-xl cursor-pointer"
        >
          Chats
        </h1>
        <PiGearSix className="text-xl cursor-pointer" />
      </div>
      {/* search bar */}
      <div className="flex items-center gap-3 justify-between w-full h-10 px-4 py-3 rounded-3xl  bg-black text-white">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none w-full"
          placeholder="Search chat .."
          onKeyDown={(e) => {
            if (query && e.key === "Enter") {
              navigate(`/${indexPath}/chat/search`);
            }
          }}
        />
        <LuSearch
          onClick={() => {
            navigate(`/${indexPath}/chat/search`);
          }}
          className="text-lg cursor-pointer hover:text-white text-slate-200"
        />
      </div>
    </div>
  );
};
export default SearchInput;
