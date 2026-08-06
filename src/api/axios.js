import axios from "axios";

const defaultBackendUrl = "https://localhost:5000";
export const API_BASE_URL = (import.meta.env.VITE_API_URL && String(import.meta.env.VITE_API_URL).trim() !== "")
  ? import.meta.env.VITE_API_URL
  : defaultBackendUrl;

const api = axios.create({
  baseURL: `${API_BASE_URL.replace(/\/$/, "")}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});

export const parseErrorMessage = (error, defaultMsg = "An unexpected error occurred. Please try again.") => {
  if (!error) return defaultMsg;
  if (typeof error === "string") return error;
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return defaultMsg;
};

export const getFullImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== "string" || !imagePath.trim()) return null;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("data:")) {
    return imagePath;
  }
  const cleanBase = API_BASE_URL.replace(/\/$/, "");
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${cleanBase}${cleanPath}`;
};

export default api;
