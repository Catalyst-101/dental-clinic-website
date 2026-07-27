import api, { parseErrorMessage } from "./axios";

export const sendContactMessage = async (messageData) => {
  try {
    const response = await api.post("/contact-messages", messageData);
    return response.data;
  } catch (error) {
    throw new Error(parseErrorMessage(error, "Failed to send contact message"));
  }
};
