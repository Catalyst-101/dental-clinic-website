import api from "./axios";

export const fetchCategories = async (params = {}) => {
  const response = await api.get("/categories", { params });
  return response.data?.data || [];
};

export const fetchCategoryById = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data?.data || null;
};
