/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { indexPath } from "../../App";
import img from "../../assets/404.jpg";

const NotFound = ({ page }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <img src={img} alt="" className="md:w-2/5" />

      {page ? (
        <>
          <h1 className="font-medium text-lg text-center">
            This page isn&apos;t available.
            <br /> Sorry about that. please go back to
            <span
              onClick={() => navigate(`/${indexPath}`)}
              className="underline text-black ml-2 cursor-pointer font-semibold"
            >
              homepage
            </span>
          </h1>
        </>
      ) : (
        <h1 className="text-lg font-medium">No matching result found.</h1>
      )}
    </div>
  );
};
export default NotFound;
