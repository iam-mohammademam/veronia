/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseurl } from "../../utils/exports";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const { id } = useParams();
  const [verified, setVerified] = useState(false);

  const verifyEmail = async () => {
    try {
      await axios.put(`${baseurl}/user/verify/${id}`);
      setVerified(true);
    } catch (error) {
      console.error(error);
      return toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    verifyEmail();
  }, [id]);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          {verified ? (
            <>
              <h1 className="text-2xl font-medium">Thank you!</h1>
              <span>Your email has been verified.</span> <br />
              <small>You can close this window safely.</small>
            </>
          ) : (
            <h1 className="text-2xl font-medium">Please wait ...</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default VerifyEmail;
