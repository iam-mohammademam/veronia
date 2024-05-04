import { getItemWithKey, removeItemWithKey } from "../utils/storedItems";

import PasswordField from "../pages/account/passwordField";
import SubmitButton from "./submitButton";
import axios from "axios";
import { baseurl } from "../utils/exports";
import { indexPath } from "../App";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Consent = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const token = getItemWithKey("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.delete(`${baseurl}/user/delete`, {
        headers: {
          authorization: token,
          password,
        },
      });

      removeItemWithKey("user");
      removeItemWithKey("token");
      setTimeout(() => {
        navigate(`/${indexPath}`);
      }, 700);
      return toast.success(res?.data?.message);
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center px-[5%]">
      <form
        onSubmit={handleSubmit}
        className="bg-black/80 backdrop-blur-sm text-white p-7 rounded-md"
      >
        <h1 className="text-3xl font-medium ">Delete account</h1>
        <span className="font-medium text-red-600">
          * This action is irreversible.
        </span>
        <div className="mt-5"></div>
        <PasswordField handleChange={handleChange} password={password} />
        <SubmitButton
          loading={loading}
          color={"white"}
          text={"Delete account"}
        />
      </form>
    </div>
  );
};
export default Consent;
