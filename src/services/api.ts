import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { StatusCodes } from "http-status-codes";
import { getToken } from './token';

// const StatusCodeMapping: Record<number, boolean> = {
//   [StatusCodes.BAD_REQUEST]: true,
//   [StatusCodes.UNAUTHORIZED]: true,
//   [StatusCodes.NOT_FOUND]: true,
// };

const BACKEND_URL = 'https://12.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
