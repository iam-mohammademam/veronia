import Skeleton from "react-loading-skeleton";

const DetailsSkeleton = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-[500px]:h-[300px] md:h-[500px] h-[400px]">
          <Skeleton className="h-full" />
        </div>
        <Skeleton height={13} width={120} className="mt-4" />
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 my-2">
            <Skeleton height={35} width={35} circle={true} />
            <div className="">
              <Skeleton width={90} />
              <Skeleton width={50} height={10} />
            </div>
          </div>

          <Skeleton width={100} height={28} />
        </div>

        <div className="flex items-center gap-3 mb-3">
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} width={70} height={23} />
          ))}
        </div>
        <Skeleton height={25} count={1.8} />
        <div className="mb-5"></div>
        <Skeleton count={7.7} />
        <div className="mt-5"></div>
        <Skeleton count={5.3} />
        <div className="mt-5"></div>
        <Skeleton count={3.8} />
        <div className="border-t border-b border-gray-900 pb-2 pt-1 flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-3">
            <Skeleton width={25} height={25} circle={true} />
            <Skeleton width={25} height={25} circle={true} />
            <Skeleton width={25} height={25} circle={true} />
          </div>
          <div className="flex items-center gap-x-3">
            <Skeleton width={25} height={25} circle={true} />
            <Skeleton width={25} height={25} circle={true} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsSkeleton;
