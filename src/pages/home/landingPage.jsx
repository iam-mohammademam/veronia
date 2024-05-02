/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import { getAllBlogs } from "../../app/features/actions";
import CardSkeleton from "../../skeleton/cardSkeleton";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    dispatch(getAllBlogs(`/blogs?sort=-createdAt&page=${currPage}`));
  }, [currPage]);

  const { data, loading } = useSelector((state) => state.blogs);

  return (
    <>
      <h1 className="font-medium text-lg mb-4">Recent blogs</h1>

      {loading ? (
        <>
          {[...Array(8)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </>
      ) : (
        <div className="flex flex-col gap-y-5">
          {data?.results?.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      )}
      <div className="mt-6 pb-5">
        <Pagination totalPages={data?.total_pages} setCurrPage={setCurrPage} />
      </div>
    </>
  );
};
export default LandingPage;
