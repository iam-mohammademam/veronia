/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ reverse }) => {
  return (
    <>
      <div
        className={`flex max-[500px]:flex-col max-[500px]:flex-col-reverse flex-nowrap gap-3 py-2 border-t border-gray-900 items-stretch ${
          reverse && "flex-row-reverse "
        } `}
      >
        {/* <div className="w-full flex gap-5 items-stretch justify-between"> */}
        <div className="w-full flex flex-col">
          <div className="">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <Skeleton height={35} width={35} circle={true} />
                <div className="">
                  <Skeleton width={70} />
                  <Skeleton width={40} height={12} />
                </div>
              </div>
              <Skeleton width={100} height={12} />
            </div>
            <Skeleton height={23} className="my-2" />
            <Skeleton height={15} count={3.7} />
          </div>

          <div className="border-t border-b border-gray-900 pb-2 pt-1 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Skeleton width={22} height={22} circle={true} />
              <Skeleton width={22} height={22} circle={true} />
              <Skeleton width={22} height={22} circle={true} />
            </div>
            <div className="flex items-center gap-x-3">
              <Skeleton width={22} height={22} circle={true} />
              <Skeleton width={22} height={22} circle={true} />
            </div>
          </div>
        </div>
        <div className="w-1/3 max-[500px]:w-full shrink-0 overflow-hidden max-[500px]:h-[250px]">
          <Skeleton className="h-full" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default CardSkeleton;
