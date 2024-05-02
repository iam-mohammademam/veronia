/* eslint-disable react/prop-types */

import ReactQuill from "react-quill";

// import "react-quill/dist/quill.snow.css";

const DescriptionBox = ({ initialState, setInitialState }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  return (
    <div className="h-fit">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={initialState?.description || ""}
        placeholder="Write something"
        onChange={(content) => {
          setInitialState({ ...initialState, description: content });
        }}
      />
    </div>
  );
};
export default DescriptionBox;
