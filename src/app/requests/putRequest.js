import axios from "axios";
import { baseurl } from "../../utils/exports";
import { getItemWithKey } from "../../utils/storedItems";

const token = getItemWithKey("token");

export const putRequest = async (endpoint, data) => {
  const res = await axios.put(baseurl + endpoint, data || {}, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
