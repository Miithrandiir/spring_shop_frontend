import axiosInstance from "../axios";
import Category from "./models/Category";

export async function getCategories(): Promise<Category[]> {
  const response = await axiosInstance.get<Category[]>("/categories");
  return response.data;
}
