import instance from "../axios";
import Category from "./models/Category";

export async function getCategories(): Promise<Category[]> {
  const response = await instance.get<Category[]>("/categories");
  return response.data;
}
