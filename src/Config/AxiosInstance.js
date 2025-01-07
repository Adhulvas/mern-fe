import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://fakestoreapi.com",
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      if (error.response.data.message === 'unauthorized user') {
        localStorage.removeItem('token');
        window.location.href = '/'; 
      }
    }
    return Promise.reject(error);
  }
);