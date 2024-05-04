/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { baseurl } from "../utils/exports";
import { indexPath } from "../App";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [second, setSecond] = useState(4);

  const getEmailFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get("email");
    const id = queryParams.get("id");
    return { email, id };
  };
  const { email, id } = getEmailFromUrl();

  const verifyEmail = async () => {
    setLoading(true);
    try {
      await axios.put(
        `${baseurl}/user/verify-email`,
        {},
        { headers: { id, email } }
      );
      toast.success("Your email has been verified. Please login.");
      const timer = setTimeout(() => navigate(`/${indexPath}/sign-in`), 4000);
      return () => clearTimeout(timer);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Internal server error!");
      const timer = setTimeout(() => navigate(`/${indexPath}/sign-up`), 4000);
      return () => clearTimeout(timer);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (email && id?.length === 24) {
      verifyEmail();
    }
  }, [email, id]);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prevSecond) => (prevSecond > 0 ? prevSecond - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {loading ? (
        <>
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin duration-300 transition-all" />
            Please wait ...
          </h1>
        </>
      ) : (
        <div className="text-center flex flex-col gap-y-4">
          <h1 className="text-2xl font-semibold">Email verification!</h1>
          <span className="font-medium">
            Your email has been verified.
            <br />
            Now you can safely close this window. Or
          </span>{" "}
          <span className="font-medium">
            You will be redirected to login page in{" "}
            <span className="font-medium">{second}</span> seconds
          </span>
        </div>
      )}
    </div>
  );
};
export default VerifyEmail;
