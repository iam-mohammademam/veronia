import img from "../assets/4.jpg";

const UserCard = () => {
  return (
    <ul className="flex flex-col last:border-b">
      <li className="flex items-center gap-2 pr-2 border-t py-2.5 duration-200 transition-colors hover:bg-gray-50">
        <div className="h-12 w-12 cursor-pointer rounded-full overflow-hidden shrink-0">
          <img src={img} alt="" className="h-full" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-fit cursor-pointer">
            <h1 className="font-medium">Jhon doe</h1>
            <small className="font-medium">@jhondoe</small>
          </div>
          <button className="outline-none bg-gray-100 px-5 py-1 rounded-3xl hover:bg-black hover:text-white duration-300 transition-colors font-medium tracking-wide">
            Follow
          </button>
        </div>
      </li>
    </ul>
  );
};
export default UserCard;
