import { useDispatch, useSelector } from "react-redux";

import Author from "./author";
import CardTools from "../../components/cardTools";
import Comments from "./comments";
import DetailsSkeleton from "../../skeleton/detailsSkeleton";
import SearchBar from "../../components/searchBar";
import Similar from "./similar";
import format from "dateformat";
import { getSingleBlog } from "../../app/features/actions";
import { indexPath } from "../../App";
import { useEffect } from "react";
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return null;
    }
    dispatch(getSingleBlog(`/blogs/${id}`));
  }, [id]);

  const { data, loading, error } = useSelector((state) => state.singleBlog);

  if (error) {
    return null;
  }

  return (
    <>
      <div className="md:hidden w-4/5 mx-auto mt-5">
        <SearchBar />
      </div>
      <div className="w-screen md:px-[15%] px-[5%] mt-5 pb-5">
        {loading ? (
          <DetailsSkeleton />
        ) : (
          <div className="flex flex-col">
            <img src={data?.thumbnail} alt="" />
            {/* details */}
            <div className="mt-4">
              {/* published date */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-medium text-sm">Author</span>
                <span className="flex items-center gap-1 font-medium text-sm text-gray-800">
                  Published on {format(data?.createdAt, "mmm d, yyyy")}
                </span>
              </div>
              {/* profile */}
              <Author data={data} />

              {/* tags */}
              <ul className="tags flex items-center gap-4 flex-wrap mt-3">
                {data?.tags?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(`/${indexPath}/filter/${item}`)}
                    className="font-medium cursor-pointer lowercase text-[#000] hover:text-black hover:underline duration-300 transition-all"
                  >
                    #{item}
                  </li>
                ))}
              </ul>
              {/* heading */}
              <h1 className="font-medium text-2xl my-3">{data?.heading}</h1>
              {/* description */}
              <div
                className="description mb-5"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
              {/* social tools */}
              <CardTools item={data} singleBlog={true} />
              {/* all comments */}
              <Comments blogId={id} />
            </div>
          </div>
        )}
        {/* similar blogs */}
        <div className="flex gap-5 md:flex-nowrap flex-wrap gap-y-6 mt-5">
          <div className="md:w-2/3 w-full shrink-0 md:border-r md:pr-4">
            <Similar tagName={data?.tags[0]} currentBlog={id} />
          </div>
          <div className="mt-5 pt-10 gap-2 flex flex-wrap"></div>
        </div>
      </div>
    </>
  );
};
export default Details;
