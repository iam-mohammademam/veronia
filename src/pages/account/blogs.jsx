/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBlogs } from "../../app/features/actions";
import CardSkeleton from "../../skeleton/cardSkeleton";
import Card from "../../components/card";
import Pagination from "../../components/pagination";

const Blogs = () => {
  const dispatch = useDispatch();
  const [currPage, setCurrPage] = useState(1);
  useEffect(() => {
    dispatch(getMyBlogs(`/blogs/my-blogs?sort=-createdAt&page=${currPage}`));
  }, [currPage]);

  const { data, loading } = useSelector((state) => state.myBlogs);

  return (
    <>
      <h1 className="text-xl font-medium mb-5 text-center"> My blogs</h1>
      <div className="lg:w-4/5 w-full mx-auto">
        {loading ? (
          <>
            {[...Array(8)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
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
