import axios from "../utils/axiosCustome";

const getUser = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
export { getUser };
