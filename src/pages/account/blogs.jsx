import { useDispatch, useSelector } from "react-redux";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Card from "../../components/card";
import CardSkeleton from "../../skeleton/cardSkeleton";
import Pagination from "../../components/pagination";
import { getMyBlogs } from "../../app/features/actions";
import { indexPath } from "../../App";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currPage, setCurrPage] = useState(1);
  useEffect(() => {
    dispatch(getMyBlogs(`/blogs/my-blogs?sort=-createdAt&page=${currPage}`));
  }, [currPage]);

  const { data, loading } = useSelector((state) => state.myBlogs);

  return (
    <>
      <h1 className="text-xl font-medium mb-5 text-center">My blogs</h1>
      <div className="lg:w-4/5 w-full mx-auto">
        {loading ? (
          <>
            {[...Array(8)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : data?.results?.length <= 0 ? (
          <div className="h-[80vh] w-full flex items-center justify-center ">
            <h1 className="text-lg font-medium text-center">
              You have no blog.{" "}
              <span
                onClick={() => {
                  navigate(`/${indexPath}/post`);
                }}
                className="underline cursor-pointer"
              >
                create
              </span>
            </h1>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6">
            {data?.results?.map((item, index) => {
              return (
                <Card key={index} item={item} options={true} column={true} />
              );
            })}
          </div>
        )}
        <div className="mt-6 pb-5">
          <Pagination
            totalPages={data?.total_pages}
            setCurrPage={setCurrPage}
          />
        </div>
      </div>
    </>
  );
};
export default Blogs;
