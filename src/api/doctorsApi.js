import api, { parseErrorMessage } from "./axios";

export const fetchDoctors = async (params = {}) => {
  try {
    const response = await api.get("/doctors", { params });
    return response.data.data || [];
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch doctors"));
  }
};

export const fetchDoctorById = async (idOrSlug) => {
  try {
    const response = await api.get(`/doctors/${idOrSlug}`);
    return response.data.data;
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to fetch doctor profile"));
  }
};
