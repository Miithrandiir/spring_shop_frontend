import {useEffect, useState} from "react";
import Product from "../api/models/Product";
import axiosInstance from "../axios";
import ProductComponent from "./ProductComponent";

export default function HighlightedProductComponent() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        axiosInstance.get('/products/highlighted').then(response => {
            setProducts(response.data);
        });

    }, []);

    return <>
        <div className={"hstack"}>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    </>

}
