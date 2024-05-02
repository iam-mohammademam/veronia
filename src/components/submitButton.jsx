/* eslint-disable react/prop-types */
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SubmitButton = ({ loading, text, color }) => {
  return (
    <>
      {loading ? (
        <button
          className={`outline-0 tex-md w-full mt-3 mb-3 h-10 flex items-center gap-2 justify-center rounded-sm cursor-progress  ${
            color === "black"
              ? "bg-black/85 text-white"
              : "bg-slate-200 text-black"
          }`}
          disabled
        >
          <AiOutlineLoading3Quarters className="animate-spin duration-300" />
          Please wait..
        </button>
      ) : (
        <button
          type="submit"
          className={`outline-0 montserrat mt-3 font-medium mb-3 w-full py-1.5 transition-colors duration-200 rounded-sm ${
            color === "black"
              ? "bg-black/85 hover:bg-black text-white"
              : "bg-white hover:bg-slate-200 text-black"
          }`}
        >
          {text}
        </button>
      )}
    </>
  );
};
export default SubmitButton;
