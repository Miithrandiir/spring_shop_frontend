import {useLoaderData} from "react-router-dom";
import Product from "../api/models/Product";
import React from "react";
import ProductComponent from "../components/ProductComponent";
import {ProductsByCategoryLoader} from "../loader/ProductsByCategoryLoader";

export default function ProductsByCategory() {

    const data = useLoaderData();

    if(!(data instanceof ProductsByCategoryLoader)) {
        return <>
        </>
    }

    return <>
        <div className={"content w-100"}>
            <section className={"vstack stack-center stack-vcenter m-5"}>
                <h2>Produit de la catégorie {data.category.name ?? "Unknown"}</h2>

                <div className={"grid4"}>
                    {
                        data.products.map((product: Product) => <ProductComponent key={product.name} product={product}/>)
                    }
                 </div>

            </section>
        </div>
    </>
}
