import { useEffect, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import PasswordField from "./passwordField";
import SubmitButton from "../../components/submitButton";
import axios from "axios";
import { baseurl } from "../../utils/exports";
import image from "../../assets/background.jpg";
import { indexPath } from "../../App";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const obj = {
    fullName: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [initialState, setInitialState] = useState(obj);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = `${indexPath?.toUpperCase()} - Sign up`;
  }, []);

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
      const res = await axios.post(`${baseurl}/user/register`, initialState);
      setInitialState(obj);
      return toast.success(res?.data?.message);
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative before:absolute before:bg-gray-500/10 before:top-0 before:left-0 before:w-full before:h-full">
      <img
        src={image}
        alt=""
        className="object-cover object-center lg:h-auto h-full"
      />
      <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-fit  shrink-0 max-[400px]:w-[90%] bg-transparent py-5 px-7 rounded-md backdrop-blur-[3px] shadow-md shadow-white/20 border border-white/20 text-white z-20">
        <h1 className="text-xl font-medium mb-3 montserrat">Join us</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <h1 className=" mb-1 text-start font-medium text-sm">Name</h1>
            <div className="flex px-2 gap-2 items-center border-b border-white rounded-sm">
              <AiOutlineUser className="text-lg" />
              <input
                type="text"
                name="fullName"
                required
                value={initialState.fullName}
                onChange={handleChange}
                className="py-1 w-full outline-0 bg-transparent placeholder-slate-100"
                placeholder="Your name"
              />
            </div>
          </div>

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
              password={initialState?.password}
              handleChange={handleChange}
            />
          </div>
          <SubmitButton loading={loading} text={"Sign up"} />
        </form>

        <small className="whitespace-nowrap">
          Already have an account ?
          <span
            onClick={() => navigate(`/${indexPath}/sign-in`)}
            className="underline cursor-pointer ml-2 text-primary"
          >
            Sign in
          </span>
        </small>
      </div>
    </div>
  );
};
export default SignUP;
