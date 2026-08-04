import api from "./axios";

export const fetchCategories = async (params = {}) => {
  try {
    const response = await api.get("/categories", { params });
    return response.data?.data || [];
  } catch (error) {
    console.warn("Categories API request failed or returned 404. Falling back to empty list:", error);
    return [];
  }
};

export const fetchCategoryById = async (id) => {
  try {
    const response = await api.get(`/categories/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.warn(`Category profile fetch failed for identifier ${id}:`, error);
    return null;
  }
};
