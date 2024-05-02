/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "../../components/card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/userCard";
import Pagination from "../../components/pagination";
import { indexPath } from "../../App";
import { getSearchData } from "../../app/features/actions";
import CardSkeleton from "../../skeleton/cardSkeleton";
import NoDataFound from "../error/notFound";
// import NotFound from "../../components/notFound";

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    dispatch(getSearchData(`/search?query=${query}&page=${currPage}`));
  }, [query, currPage]);

  const { data, loading } = useSelector((state) => state.search);
  useEffect(() => {
    document.title = `${indexPath?.toUpperCase()} - Search`;
  }, []);

  return (
    <>
      <div className="w-screen md:px-[10%] px-[5%] mt-5">
        {/* <div className="h-screen">
          <NotFound />
        </div> */}
        <div className="flex md:flex-nowrap flex-wrap gap-y-6 mt-4 gap-4">
          <div className="md:w-3/4 w-full shrink-0 md:pr-4 md:border-r">
            <h1 className="font-medium text-lg mb-2">
              Showing results for <span className="underline">{query}</span>
            </h1>

            <div className="flex flex-col gap-y-5">
              {loading ? (
                <>
                  {[...Array(8)].map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
                </>
              ) : data?.results?.length <= 0 ? (
                <NoDataFound />
              ) : (
                data?.results?.map((item, index) => {
                  return <Card key={index} item={item} />;
                })
              )}
            </div>
            {/* pagination */}
            <div className="mt-6 pb-5">
              <Pagination
                totalPages={data?.total_pages}
                setCurrPage={setCurrPage}
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-medium text-lg mb-2">Related users</h1>
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
