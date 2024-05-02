/* eslint-disable react/prop-types */
import { LiaTimesSolid } from "react-icons/lia";

const ImagePreview = ({ imageUrl, handleEvent }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        alt={`thumbnail`}
        className="w-full h-full rounded-sm object-cover object-center"
      />
      <div
        onClick={handleEvent}
        className="absolute top-3 right-3 cursor-pointer bg-gray-50/50 hover:bg-gray-50/70 duration-300 transition-colors rounded-full h-7 w-7 flex items-center justify-center"
      >
        <LiaTimesSolid />
      </div>
    </div>
  );
};
export default ImagePreview;
