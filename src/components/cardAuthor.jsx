/* eslint-disable react/prop-types */
import { FiClock } from "react-icons/fi";
import avatar from "../assets/avatar.png";
import format from "dateformat";

const CardAuthor = ({ item, reverse }) => {
  return (
    <>
      {reverse ? (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-black overflow-hidden cursor-pointer">
            <img
              src={item?.author?.avatar || avatar}
              alt=""
              className="h-full"
            />
          </div>
          <small className="font-medium cursor-pointer w-full overflow-hidden text-ellipsis whitespace-nowrap">
            @{item?.author?.username || "unknown"}
          </small>
          <small className="flex items-center gap-1 font-medium text-gray-800 ml-2">
            <FiClock />
            {format(item?.createdAt, "d mmm yyyy")}
          </small>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2 w-full overflow-hidden">
          {/* profile */}
          <div className="flex items-center gap-2 w-fit">
            <div className="w-9 h-9 bg-black cursor-pointer rounded-full overflow-hidden">
              <img
                src={item?.author?.avatar || avatar}
                alt=""
                className="object-cover object-center  h-full"
              />
            </div>
            <div>
              <h1 className="font-semibold cursor-pointer montserrat text-sm w-full shrink-0 overflow-hidden text-ellipsis whitespace-nowrap">
                {item?.author?.fullName || "unknown"}
              </h1>
              <small className="font-medium cursor-pointer w-full overflow-hidden text-ellipsis whitespace-nowrap">
                @{item?.author?.username || "unknown"}
              </small>
            </div>
          </div>
          {/* published date */}
          <span className="flex items-center gap-1 font-medium text-sm text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
            Published on {format(item?.createdAt, "d mmm yyyy")}
          </span>
        </div>
      )}
    </>
  );
};
export default CardAuthor;
