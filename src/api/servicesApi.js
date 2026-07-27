import api, { parseErrorMessage } from "./axios";

export const fetchServices = async (params = {}) => {
  try {
    const response = await api.get("/services", { params });
    return response.data.data || [];
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch services"));
  }
};

export const fetchServiceById = async (idOrSlug) => {
  try {
    const response = await api.get(`/services/${idOrSlug}`);
    return response.data.data;
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch service details"));
  }
};
