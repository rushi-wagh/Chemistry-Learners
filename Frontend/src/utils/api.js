import axios from "axios";

// Configure default axios settings
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || "";
axios.defaults.withCredentials = true;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, result) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(result);
  });
  failedQueue = [];
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAccessExpired =
      error?.response?.status === 401 &&
      error?.response?.data?.errors?.[0] === "Access token expired";

    if (isAccessExpired && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => axios(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call refresh endpoint (server sets new cookies)
        await axios.get("/api/v1/auth/refreshtoken");

        processQueue(null, true);

        // Retry original request
        return axios(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        try {
          // Clear client-side user state and redirect to login
          localStorage.removeItem("user");
          // If app uses SPA routing, navigate to auth route
          if (typeof window !== "undefined") {
            window.location.href = "/auth";
          }
        } catch (e) {
          // ignore
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
