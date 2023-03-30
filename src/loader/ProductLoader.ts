import Product from "../api/models/Product";
import axiosInstance from "../axios";

export class ProductLoader {
    product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}

export async function productLoader({params}: { params: any }) {
    const data = await axiosInstance.get<Product>('/products/' + params.id);
    return new ProductLoader(data.data);
}
