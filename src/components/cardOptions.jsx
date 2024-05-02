/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import { LuPencilLine } from "react-icons/lu";
import toast from "react-hot-toast";

const CardOptions = ({ setShowModal }) => {
  return (
    <>
      <div className="absolute top-2 right-2">
        <div className="relative group/btn cursor-pointer bg-slate-50/30 hover:bg-slate-50/60 duration-300 transition-all h-7 w-7 rounded-full flex items-center justify-center">
          <BsThreeDotsVertical />
          {/* options */}
          <ul
            className={`absolute top-1/2 group-hover/btn:scale-100 group-hover/btn:pointer-events-auto transition-all duration-300 scale-50 opacity-0 group-hover/btn:opacity-100 pointer-events-none  right-full bg-slate-50/50 rounded-sm backdrop-blur-[2px] origin-top-right`}
          >
            <li
              onClick={() => {
                return toast.loading("This function is under development.");
              }}
              className="font-medium capitalize flex items-center gap-1.5 hover:bg-slate-100 duration-300 transition-all cursor-pointer px-3 py-1.5"
            >
              <LuPencilLine /> Edit
            </li>
            <li
              onClick={() => setShowModal(true)}
              className="font-medium capitalize flex items-center gap-1.5 hover:bg-slate-100 duration-300 transition-all cursor-pointer px-3 py-1.5"
            >
              <GoTrash /> Delete
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CardOptions;
