import img from "../assets/404.jpg";

const NotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={img} alt="" className="w-1/4" />
    </div>
  );
};
export default NotFound;
