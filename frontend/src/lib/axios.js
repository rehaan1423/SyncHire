import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = await window?.Clerk?.session?.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    console.error("Failed to get Clerk token", e);
  }
  return config;
});