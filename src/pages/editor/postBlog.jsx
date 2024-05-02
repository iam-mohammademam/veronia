import { useCallback, useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import DescriptionBox from "./descriptionBox";
import ImagePreview from "./imagePreview";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { baseurl } from "../../utils/exports";
import { getItemWithKey } from "../../utils/storedItems";
import toast from "react-hot-toast";

const PostBlog = () => {
  const [initialState, setInitialState] = useState({
    heading: "",
    description: "",
    tags: [],
    thumbnail: null,
    previewImages: [],
    tagInput: "",
  });
  const [loading, setLoading] = useState(false);

  // const handleClick = useCallback(
  //   (index) => {
  //     const updatedPreviewImages = [...previewImages];
  //     updatedPreviewImages.splice(index, 1);
  //     const updatedImages = [...images];
  //     updatedImages.splice(index, 1);
  //     setInitialState((prevState) => ({
  //       ...prevState,
  //       previewImages: updatedPreviewImages,
  //       images: updatedImages,
  //     }));
  //   },
  //   [image, previewImages]
  // );
  const filterTags = useCallback(
    (tagName) => {
      const filteredTags = initialState?.tags?.filter(
        (item) => item.name !== tagName
      );
      setInitialState((prevState) => ({
        ...prevState,
        tags: filteredTags,
      }));
    },
    [initialState?.tags]
  );
  const token = getItemWithKey("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", initialState?.thumbnail);
    formData.append("heading", initialState?.heading);
    formData.append("description", initialState?.description);
    if (initialState?.tags?.length > 0) {
      initialState?.tags?.forEach((tag) => {
        formData.append("tags", tag.name);
      });
    }
    setLoading(true);
    try {
      const res = await axios.post(`${baseurl}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      });
      setInitialState(null);
      return toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      return toast.error(
        error?.response?.data?.message || "Error uploading image."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full md:px-[10%] px-[5%] py-5">
        <form
          encType="multipart/form-data"
          className="pb-5"
          onSubmit={handleSubmit}
        >
          <div className="sm:min-h-[500px] overflow-hidden mb-4">
            {initialState?.thumbnail ? (
              <ImagePreview
                imageUrl={
                  initialState?.thumbnail &&
                  URL.createObjectURL(initialState?.thumbnail)
                }
                handleEvent={() =>
                  setInitialState({ ...initialState, thumbnail: null })
                }
              />
            ) : (
              <>
                <input
                  type="file"
                  name="thumbnail"
                  alt=""
                  id="image"
                  onChange={(e) =>
                    setInitialState({
                      ...initialState,
                      thumbnail: e.target.files[0],
                    })
                  }
                  value={initialState?.previewImages[0]}
                  accept="image/"
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="w-full sm:h-[500px] h-[250px] rounded-sm bg-gray-100 flex-col text-center flex items-center justify-center cursor-pointer"
                >
                  <CiCirclePlus className="text-6xl" />
                  Select an image for thumbnail
                </label>
              </>
            )}
          </div>

          {initialState?.thumbnail && (
            <div className="w-full h-full grid grid-cols-4 gap-4 mb-4">
              {initialState?.previewImages?.map((imageUrl, index) => (
                <ImagePreview
                  key={index}
                  imageUrl={imageUrl}
                  // handleEvent={() => handleClick(index)}
                />
              ))}
              {/* {previewImages.length < 4 && (
                <>
                  <input
                    type="file"
                    name="images"
                    multiple
                    alt=""
                    id="images"
                    onChange={handleImageUpload}
                    accept="image/"
                    className="hidden"
                  />
                  <label
                    htmlFor="images"
                    className="w-full min-h-[170px] rounded-sm bg-gray-100 flex flex-col gap-y-1 items-center justify-center cursor-pointer"
                  >
                    <CiCirclePlus className="text-4xl" />
                    Click here to select an image
                  </label>
                </>
              )} */}
            </div>
          )}

          <div className="relative">
            <h1 className="font-medium mt-3 mb-1.5">Heading*</h1>
            <textarea
              name="heading"
              id=""
              value={initialState?.heading}
              required
              placeholder="Blog heading"
              onChange={(e) =>
                setInitialState({ ...initialState, heading: e.target.value })
              }
              className="w-full h-16 rounded-sm border outline-none p-2 resize-none bg-transparent"
            ></textarea>
            <small className="absolute top-full right-0 font-medium sm:text-md">
              90 characters left
            </small>
          </div>
          <h1 className="font-medium mt-3 mb-1.5 capitalize">description*</h1>
          <DescriptionBox
            setInitialState={setInitialState}
            initialState={initialState}
          />

          <h1 className="font-medium mt-3 capitalize mb-1.5">Tags*</h1>

          <div className="w-full border rounded-sm flex flex-col p-2  gap-y-2">
            {initialState?.tags?.length > 0 && (
              <ul className="flex items-center flex-wrap gap-2">
                {initialState?.tags?.map((item, index) => (
                  <li
                    key={index}
                    className="pl-5 pr-2 py-1.5 rounded-3xl bg-gray-100 flex items-center gap-2"
                  >
                    {item?.name}
                    <LiaTimesSolid
                      onClick={() => filterTags(item?.name)}
                      className="cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            )}
            <textarea
              type="text"
              value={initialState?.tagInput}
              onChange={(e) =>
                setInitialState({ ...initialState, tagInput: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && initialState?.tagInput) {
                  setInitialState({
                    ...initialState,
                    tags: [
                      ...initialState.tags,
                      { name: initialState?.tagInput },
                    ],
                    tagInput: "",
                  });
                }
              }}
              className="outline-none rounded-sm resize-none h-8 pt-1 bg-transparent"
              placeholder="Tag name"
            ></textarea>
          </div>

          {loading ? (
            <div
              className={`w-full
              outline-none bg-black/80 cursor-progress flex items-center gap-2 justify-center mt-5 text-white text-md font-medium tracking-wide py-2 rounded-sm`}
            >
              <AiOutlineLoading3Quarters className="animate-spin duration-300 transition-all" />{" "}
              Please wait...
            </div>
          ) : (
            <button
              type="submit"
              className={`w-full
              outline-none bg-black/80 hover:bg-black transition-colors duration-300 mt-5 text-white text-md font-medium tracking-wide py-2 rounded-sm`}
            >
              Upload blog
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default PostBlog;
