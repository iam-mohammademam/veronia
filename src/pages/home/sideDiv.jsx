import { useNavigate } from "react-router-dom";
import { indexPath } from "../../App";
import { useState } from "react";
import { categories } from "../../utils/exports";
import { BsArrowRight } from "react-icons/bs";
import SeachBar from "../../components/searchBar";

const SideDiv = () => {
  const navigate = useNavigate();
  const [showMoreTags, setShowMoreTags] = useState(false);

  const handleClick = (tagName) => {
    navigate(`/${indexPath}/filter/${tagName}`);
  };
  return (
    <>
      <div className="md:block hidden">
        <SeachBar />
      </div>
      <h1 className="font-medium text-md md:mt-4 mb-4">You might like</h1>
      <ul className="tags flex items-center gap-4 flex-wrap relative">
        {categories.map((item, index) => {
          if (!showMoreTags && index > 15) {
            return null;
          }
          return (
            <li
              key={index}
              onClick={() => handleClick(item.name)}
              className="px-4 py-1 font-medium capitalize rounded-3xl bg-slate-100/90 hover:bg-black/80 hover:text-white cursor-pointer transition-all duration-300"
            >
              {item.name}
            </li>
          );
        })}
        <div className="absolute bottom-0 right-2 bg-gradient-to-b from-transparent to-white p-2">
          {!showMoreTags && (
            <button
              onClick={() => setShowMoreTags(true)}
              className="hover:text-black duration-300 transition-all font-medium text-sm text-slate-500 flex items-center gap-1.5 "
            >
              See more <BsArrowRight />
            </button>
          )}
        </div>
      </ul>
    </>
  );
};
export default SideDiv;
