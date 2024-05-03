import { useEffect, useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import PasswordField from "./passwordField";
import SubmitButton from "../../components/submitButton";
import axios from "axios";
import { baseurl } from "../../utils/exports";
import image from "../../assets/background.jpg";
import { indexPath } from "../../App";
import { storeItemWithKey } from "../../utils/storedItems";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const obj = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [initialState, setInitialState] = useState(obj);
  const [loading, setLoading] = useState(false);
  const [resendEmailId, setResendEmailId] = useState(null);

  useEffect(() => {
    document.title = `${indexPath?.toUpperCase()} - Sign in`;
  }, []);

  const handleSendEmail = async () => {
    try {
      const res = await axios.get(
        `${baseurl}/user/verification-email/${resendEmailId}`
      );
      setResendEmailId(null);
      toast.success(res?.data?.message);
      setTimeout(() => {
        navigate(`/${indexPath}`);
        return location.reload();
      }, 600);
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseurl}/user/login`, initialState);
      storeItemWithKey("user", res?.data?.result);
      storeItemWithKey("token", res?.data?.token);
      setInitialState(obj);
      setTimeout(() => {
        navigate(`/${indexPath}`);
      }, 1000);
      return toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      if (error?.response?.status == 403) {
        setResendEmailId(error?.response?.data?.id);
      }
      return toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative before:absolute before:bg-gray-500/10 before:top-0 before:left-0 before:w-full before:h-full ">
      <img
        src={image}
        alt=""
        className="object-cover object-center lg:h-auto h-full"
      />
      <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-fit shrink-0 max-[400px]:w-[90%] bg-transparent py-5 px-6 rounded-md backdrop-blur-[3px] shadow-md shadow-white/20 border border-white/20 text-white z-20">
        <h1 className="text-xl font-medium mb-3 montserrat">Welcome</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <h1 className="capitalize mb-1 text-start font-medium text-sm">
              email
            </h1>
            <div className="flex px-2 gap-2 items-center border-b border-white rounded-sm">
              <MdOutlineAlternateEmail className="text-lg" />
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={initialState.email}
                className="py-1 w-full outline-0 bg-transparent placeholder-slate-100"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="mt-3">
            <PasswordField
              loading={loading}
              setInitialState={setInitialState}
              initialState={initialState}
              handleChange={handleChange}
            />
          </div>
          <SubmitButton loading={loading} text={"Sign in"} />
        </form>

        <small className="whitespace-nowrap">
          Don&apos;t have an account ?
          <span
            onClick={() => navigate(`/${indexPath}/sign-up`)}
            className="underline cursor-pointer ml-1.5 text-primary"
          >
            Sign up
          </span>
        </small>
        {resendEmailId && (
          <small className="whitespace-nowrap">
            Didn&apos;t receive an email ?
            <span
              onClick={handleSendEmail}
              className="underline cursor-pointer ml-1.5 mt-2 text-primary"
            >
              Resend
            </span>
          </small>
        )}
      </div>
    </div>
  );
};
export default SignIn;
