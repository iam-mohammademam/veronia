/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { setActiveMenu, setInitialState } from "../../app/features/othersSlice";
import { useEffect, useState } from "react";

import { AiOutlineReload } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import { getItemWithKey } from "../../utils/storedItems";
import { noProfile } from "../../utils/exports";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SelectAvatar = () => {
  const dispatch = useDispatch();
  const [avatars, setAvatars] = useState(null);

  const handleImageChange = ({ target }) => {
    const selectedFile = target.files[0];
    const imgType = selectedFile?.type?.split("/")[0];

    if (imgType === "image") {
      dispatch(setInitialState({ key: "avatar", value: selectedFile }));
      dispatch(setActiveMenu("profile"));
    } else {
      return toast.error("Only image supported.");
    }
  };
  const user = getItemWithKey("user");
  const avatarCollections = [
    "notionists",
    "adventurer",
    "personas",
    "lorelei",
    "micah",
    "initials",
    "miniavs",
    "avataaars",
    "open-peeps",
  ];
  const generateAvatarUrls = () => {
    let avatarUrls = [];
    let generatedTypes = new Set();

    for (let i = 0; i < 6; i++) {
      let avatarType;
      do {
        avatarType =
          avatarCollections[
            Math.floor(Math.random() * avatarCollections.length)
          ];
      } while (generatedTypes.has(avatarType));

      generatedTypes.add(avatarType);

      let url = `https://api.dicebear.com/6.x/${avatarType}/svg?seed=${user?.fullName}`;
      avatarUrls.push(url);
    }

    setAvatars(avatarUrls);
  };

  useEffect(() => {
    generateAvatarUrls();
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-y-5 items-center justify-center">
        <div className="gap-4 flex-wrap flex items-center justify-center">
          {avatars?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(setInitialState({ key: "avatar", value: item }));
                  dispatch(setActiveMenu("profile"));
                }}
                className="h-24 cursor-pointer w-24 shrink-0 bg-black rounded-full overflow-hidden"
              >
                <img
                  src={item || noProfile}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            );
          })}
          <input
            type="file"
            accept="image/"
            name=""
            id="avatar"
            onChange={handleImageChange}
            className="hidden"
          />
          <label
            htmlFor="avatar"
            className="w-24 h-24 bg-black rounded-full shrink-0 flex items-center justify-center cursor-pointer"
          >
            <LuPlus className="text-3xl text-white" />
          </label>
        </div>
        <button
          onClick={() => {
            generateAvatarUrls();
          }}
          className="bg-black group/btn text-white w-8 h-8 flex items-center justify-center rounded-full"
        >
          <AiOutlineReload className="text-xl group-hover/btn:animate-spin duration-300 transition-all" />
        </button>
      </div>
    </>
  );
};
export default SelectAvatar;
