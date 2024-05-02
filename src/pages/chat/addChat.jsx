import { useEffect, useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import ChatCard from "./chatCard";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { baseurl } from "../../utils/exports";

const AddChat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseurl}/user/list`);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
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
            return <ChatCard key={index} item={item} user={true} />;
          })}
    </>
  );
};
export default AddChat;
