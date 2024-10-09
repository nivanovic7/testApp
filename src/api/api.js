import axios from "axios";
import { API_URL, REFRESH_TOKEN_URL } from "../utils/config";

export function setAuthHeader(token) {
  token
    ? (api.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete api.defaults.headers.common["Authorization"];
}

export const api = axios.create({
  baseURL: API_URL,
});

export function setRefreshToken() {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (error.config.url === API_URL + REFRESH_TOKEN_URL) {
            throw new Error();
          }
          const refreshToken = localStorage.getItem("refreshToken");
          const response = await api.post(REFRESH_TOKEN_URL, {
            refreshToken,
          });
          const { token } = response.data;
          localStorage.setItem("token", token);

          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          console.log(error);
        }
      }

      return Promise.reject(error);
    }
  );
}
