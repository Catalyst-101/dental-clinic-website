import api, { parseErrorMessage } from "./axios";

export const fetchSettings = async () => {
  try {
    const response = await api.get("/settings");
    return response.data.data || {};
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch clinic settings"));
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await api.get("/settings/testimonials");
    return response.data.data || [];
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch testimonials"));
  }
};

export const fetchGallery = async () => {
  try {
    const response = await api.get("/settings/gallery");
    return response.data.data || [];
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch gallery"));
  }
};
