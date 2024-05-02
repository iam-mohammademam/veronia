/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch, useSelector } from "react-redux";

import { BsThreeDotsVertical } from "react-icons/bs";
import ChatCard from "./chatCard";
import Skeleton from "react-loading-skeleton";
import { getAllChats } from "../../app/actions/chatActions";
import { getItemWithKey } from "../../utils/storedItems";
import { useEffect } from "react";

const AllChats = () => {
  const dispatch = useDispatch();

  const token = getItemWithKey("token");

  useEffect(() => {
    if (!token) {
      return null;
    } else {
      dispatch(getAllChats("/chat/all"));
    }
  }, []);
  const { data, loading } = useSelector((state) => state.chats);
  return (
    <>
      <ul className="flex flex-col gap-y-1 w-full overflow-y-scroll scrollbar h-full ">
        {loading
          ? [...Array(10)].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-2.5 w-full"
                >
                  <div className="flex items-center gap-2 w-1/2">
                    <Skeleton height={30} width={30} circle={true} />
                    <div className="flex flex-col">
                      <Skeleton height={20} width={120} />
                      <Skeleton height={16} width={100} />
                    </div>
                  </div>
                  <BsThreeDotsVertical className="text-lg cursor-pointer" />
                </div>
              );
            })
          : data?.results?.map((item, index) => {
              return <ChatCard key={index} item={item} />;
            })}
      </ul>
    </>
  );
};
export default AllChats;
