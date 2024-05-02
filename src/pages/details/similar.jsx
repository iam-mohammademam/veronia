/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getBlogByTag } from "../../app/features/actions";
import Card from "../../components/card";
import CardSkeleton from "../../skeleton/cardSkeleton";
import { useDispatch, useSelector } from "react-redux";

const Similar = ({ tagName, currentBlog }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogByTag(`/search?query=${tagName}&limit=6`));
  }, [tagName]);
  const { data, loading } = useSelector((state) => state.filterBlogs);

  if (data?.results?.length <= 1) {
    return null;
  }
  return (
    <>
      <div className="py-5 w-full">
        <h1 className="font-medium text-lg mb-5">Similar titles</h1>
        {loading ? (
          <div className="flex flex-col gap-y-4">
            {[...Array(5)].map((_, index) => (
              <CardSkeleton key={index} reverse={true} />
            ))}
          </div>
        ) : (
          <ul className="flex flex-col gap-y-5 w-full">
            {data?.results?.map((item, index) => {
              if (item?._id === currentBlog) {
                return null;
              }
              return <Card key={index} item={item} />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default Similar;
