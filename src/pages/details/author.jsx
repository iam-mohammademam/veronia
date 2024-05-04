/* eslint-disable react/prop-types */
import { noProfile } from "../../utils/exports";

const Author = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black cursor-pointer rounded-full overflow-hidden">
            <img
              src={data?.author?.avatar || noProfile}
              alt=""
              className="object-cover object-center  h-full"
            />
          </div>

          <div className="">
            <h1 className="font-semibold cursor-pointer montserrat">
              {data?.author?.fullName}
            </h1>
            <small className="font-medium cursor-pointer">
              @{data?.author?.username}
            </small>
          </div>
        </div>
        <button className="bg-black/90 hover:bg-black tracking-wider duration-300 transition-colors text-white px-5 py-1.5 rounded-3xl">
          Follow
        </button>
      </div>
    </>
  );
};
export default Author;
