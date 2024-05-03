/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";

import CardAuthor from "./cardAuthor";
import CardOptions from "./cardOptions";
import CardTools from "./cardTools";
import { deleteBlog } from "../app/features/myBlogsSlice.js";
import { handleDeleteBlog } from "../utils/functions";
import { indexPath } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({ column, item, options }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const { loggedInUser } = useSelector((state) => state.others);

  const handleNavigation = () => {
    navigate(`/${indexPath}/detail/${item?._id}`);
  };

  return (
    <>
      <div
        className={`flex max-[500px]:flex-col-reverse md flex-nowrap gap-3 py-2 border-t items-center w-full overflow-hidden ${
          column && "max-[767px]:flex-col-reverse relative"
        } `}
      >
        {/* author details */}
        <div className="w-full">
          <CardAuthor item={item} />
          {/* heading */}
          <h1
            onClick={handleNavigation}
            className={`font-medium ellipsis cursor-pointer text-xl mb-1.5`}
          >
            {item?.heading}
          </h1>
          {/* description */}
          <div
            className="ellipsis-3"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
          <CardTools item={item} />
        </div>
        {/* thumbnail */}
        <div
          className={`${
            column && "max-[767px]:w-full"
          } shrink-0 w-1/3 max-[500px]:w-full min-[499px]:max-h-[170px] overflow-hidden cursor-pointer`}
        >
          <img
            onClick={handleNavigation}
            src={item?.thumbnail}
            alt=""
            className="h-full"
          />
        </div>
        {/* 3 dots */}
        {options && <CardOptions setShowModal={setShowModal} item={item} />}
      </div>

      {/* popup modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed top-0 left-0 h-full w-full bg-black/15"
        />
      )}
      <div
        className={`${
          showModal ? "scale-100 opacity-100" : "scale-50 opacity-0"
        } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rounded-md shadow-md bg-slate-100/95 py-6 px-3 z-20 `}
      >
        <h1 className="font-medium mb-4 text-lg capitalize">{indexPath}</h1>
        <h1 className="font-medium min-[300px]:whitespace-nowrap">
          Do you really want to delete this blog?
        </h1>
        <div
          onClick={() => setShowModal(false)}
          className="flex items-center justify-between mt-5 w-full px-5"
        >
          <button className="bg-black px-4 py-1.5 text-white font-medium capitalize rounded-sm hover:bg-black/85 duration-300 transition-all">
            cancel
          </button>
          <button
            onClick={async () => {
              if (!loggedInUser?._id) {
                return;
              } else {
                dispatch(deleteBlog({ id: item?._id }));
                await handleDeleteBlog(item?._id);
              }
            }}
            className="bg-red-600 px-4 py-1.5 text-white font-medium capitalize rounded-sm hover:bg-red-600/90 duration-300 transition-all"
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
