/* eslint-disable react/prop-types */
import { getItemWithKey, storeItemWithKey } from "../../utils/storedItems";
import { setActiveMenu, setInitialState } from "../../app/features/othersSlice";
import { useDispatch, useSelector } from "react-redux";

import { LiaTimesSolid } from "react-icons/lia";
import { LuPen } from "react-icons/lu";
import PasswordField from "./passwordField";
import SubmitButton from "../../components/submitButton";
import axios from "axios";
import { baseurl } from "../../utils/exports";
import toast from "react-hot-toast";
import { useState } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { initialState } = useSelector((state) => state.others);
  const token = getItemWithKey("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInitialState({ key: name, value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", initialState.avatar);
    formData.append("username", initialState.username);
    formData.append("fullName", initialState.fullName);
    formData.append("email", initialState.email);
    formData.append("password", initialState.password);
    setLoading(true);
    try {
      const res = await axios.put(`${baseurl}/user/update`, formData, {
        headers: { authorization: token },
      });

      toast.success(res?.data?.message);
      storeItemWithKey("user", res?.data?.result);
      setTimeout(() => {
        dispatch(setInitialState(null));
        return location.reload();
      }, 700);
    } catch (error) {
      return toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full relative">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-black">
            <img
              src={
                initialState?.avatar?.name
                  ? URL.createObjectURL(initialState?.avatar)
                  : initialState?.avatar
              }
              alt="avatar"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div
            onClick={() => {
              dispatch(setActiveMenu("avatars"));
            }}
            className="absolute bottom-0 right-0"
          >
            <LuPen />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center w-auto">
          <input
            type="text"
            name="username"
            value={initialState?.username}
            onChange={handleChange}
            className="w-fit border py-1.5 rounded-sm outline-none text-center text-sm px-2 font-medium bg-transparent"
          />
          <input
            type="text"
            name="fullName"
            value={initialState?.fullName}
            onChange={handleChange}
            className="w-fit border py-1.5 rounded-sm outline-none text-center px-2 bg-transparent font-medium"
          />
          <span className="font-medium">{initialState?.email}</span>
          <div onClick={() => setShowModal(true)} className="w-full">
            <SubmitButton text={"Save changes"} color={"black"} />
          </div>
        </div>
      </div>
      {/* popup modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed top-0 left-0 h-full w-full bg-black/15"
        />
      )}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          showModal ? "scale-100" : "scale-50 opacity-0 pointer-events-none"
        } duration-300 transition-all max-[300px]:w-[90%] `}
      >
        <div className="p-5 rounded-md bg-slate-50 shadow-md relative border border-white/20 text-center">
          <div
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-500/20 transition-all duration-300"
          >
            <LiaTimesSolid className="text-md" />
          </div>
          <h1 className="text-lg font-medium mb-4 mt-2 min-[300px]:whitespace-nowrap">
            Confirm your password
          </h1>
          <form onSubmit={handleSubmit}>
            <PasswordField
              password={initialState?.password}
              handleChange={handleChange}
              color={"black"}
            />
            <SubmitButton
              loading={loading}
              text={"Update profile"}
              color={"black"}
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default Profile;
