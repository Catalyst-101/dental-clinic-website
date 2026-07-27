import api, { parseErrorMessage } from "./axios";

export const createAppointment = async (appointmentData) => {
  try {
    const response = await api.post("/appointments", appointmentData);
    return response.data;
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to submit appointment request"));
  }
};
