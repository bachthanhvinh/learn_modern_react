import axios from "axios";
import { store } from "../redux/store";

let loadingRef = null;

export const setLoadingBarRef = (ref) => {
  loadingRef = ref;
};

const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = `Bearer ${access_token}`;

    loadingRef?.current?.continuousStart();
    // Do something before request is sent
    return config;
  },
  function (error) {
    loadingRef?.current?.complete();
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    loadingRef?.current?.complete();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response && response.data ? response.data : response;
  },
  function (error) {
    loadingRef?.current?.complete();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
