import {useEffect, useState} from "react";
import Product from "../api/models/Product";
import instance from "../axios";
import ProductComponent from "./ProductComponent";

export default function HighlightedProductComponent() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        instance.get('/products/highlighted').then(response => {
            setProducts(response.data);
        });

    }, []);

    return <>
        <div className={"hstack"}>
            {
                products.map(product => <ProductComponent product={product}/>)
            }
        </div>
    </>

}
