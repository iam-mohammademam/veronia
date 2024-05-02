/* eslint-disable react-hooks/exhaustive-deps */
import { FiClock } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import format from "dateformat";
import { getTrendingBLogs } from "../../app/features/actions";
import { useEffect } from "react";
import { indexPath } from "../../App";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Trendings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getTrendingBLogs(
        "/blogs?sort=-likes&fields=heading createdAt author._id author.username _id likes"
      )
    );
  }, []);

  const { data, loading } = useSelector((state) => state.trendingBlogs);
  const handleNavigation = (blogId) => {
    navigate(`/${indexPath}/detail/${blogId}`);
  };
  return (
    <>
      <div className="pt-5">
        <h1 className="font-medium mb-2">Trending now </h1>
        <ul className="flex flex-col gap-y- last:border-b">
          {loading ? (
            <>
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 w-full border-t p-2"
                >
                  <h1 className="text-5xl text-gray-200 font-bold w-[15%] shrink-0 mt-auto">
                    {index < 9 && "0"}
                    {index + 1}
                  </h1>
                  <div className="w-full">
                    <Skeleton count={1.8} height={22} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col">
              {data?.results?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleNavigation(item?._id)}
                    className="flex gap-3 cursor-pointer p-2 border-t group/card hover:bg-slate-100/90  duration-300 transition-all"
                  >
                    <h1 className="text-5xl text-gray-200 font-bold w-fit shrink-0 mt-auto">
                      {index < 9 && "0"}
                      {index + 1}
                    </h1>
                    <div className="">
                      <div className="flex items-center gap-1.5">
                        <small className="font-medium whitespace-nowrap overflow-hidden w-full shrink-0 text-ellipsis">
                          @{item?.author?.username}
                        </small>
                        <small className="flex items-center gap-0.5 font-medium text-gray-800 ml-2 whitespace-nowrap overflow-hidden w-full text-ellipsis">
                          <FiClock className="mb-0.5" />
                          {format(item?.createdAt, "d mmm yyyy")}
                        </small>
                      </div>
                      <h1 className="font-medium text-lg ellipsis group-hover/card:opacity-95">
                        {item?.heading}
                      </h1>
                    </div>
                  </li>
                );
              })}
            </div>
          )}
        </ul>
      </div>
    </>
  );
};
export default Trendings;
