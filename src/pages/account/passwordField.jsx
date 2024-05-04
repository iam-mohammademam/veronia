import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { FiLock } from "react-icons/fi";
/* eslint-disable react/prop-types */
import { useState } from "react";

const PasswordField = ({ handleChange, color, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h1 className="capitalize mb-1 text-start font-medium text-sm">
        password
      </h1>
      <div
        className={`flex px-2 gap-2 items-center border-b ${
          color === "black" ? "border-black/50" : "border-white"
        }`}
      >
        <FiLock className="text-xl" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          onChange={handleChange}
          value={password}
          className="py-1 w-full outline-0 bg-transparent placeholder-slate-100"
          placeholder="Password"
        />

        <div
          onClick={() => setShowPassword((prevState) => !prevState)}
          className={`${password ? "opacity-100" : "opacity-0"} cursor-pointer`}
        >
          {showPassword ? (
            <AiOutlineEye className="text-xl" />
          ) : (
            <AiOutlineEyeInvisible className="text-xl" />
          )}
        </div>
      </div>
    </>
  );
};
export default PasswordField;
