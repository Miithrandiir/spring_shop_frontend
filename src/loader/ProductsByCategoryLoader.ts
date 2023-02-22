import axiosInstance from "../axios";
import Product from "../api/models/Product";
import Category from "../api/models/Category";

export class ProductsByCategoryLoader {
    products: Product[];
    category: Category;

    constructor(products: Product[], category: Category) {
        this.products = products;
        this.category = category;
    }
}

export async function productsByCategoryLoader({params}: { params: any }) {

    const data = await axiosInstance.get<Product[]>('/products/category/' + params.id);
    const category = await axiosInstance.get<Category>('/categories/' + params.id);
    return new ProductsByCategoryLoader(data.data, category.data);

}
