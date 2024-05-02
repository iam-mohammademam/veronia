/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBlogByTag } from "../../app/features/actions";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import CardSkeleton from "../../skeleton/cardSkeleton";
import NoDataFound from "../error/notFound";
const Filter = () => {
  const [currPage, setCurrPage] = useState(1);
  const { tagName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogByTag(`/search?query=${tagName}&page=${currPage}`));
  }, [tagName, currPage]);

  const { data, loading } = useSelector((state) => state.filterBlogs);

  return (
    <>
      <div className="w-screen md:px-[10%] px-[5%] mt-5">
        <h1 className="font-medium text-lg">#{tagName} </h1>

        <div className="flex md:flex-nowrap flex-wrap gap-y-6 mt-4 gap-4">
          <div className="md:w-3/4 w-full shrink-0 md:pr-4 md:border-r">
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
            <div className="mt-6 pb-5">
              <Pagination
                totalPages={data?.total_pages}
                setCurrPage={setCurrPage}
              />
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </>
  );
};
export default Filter;
