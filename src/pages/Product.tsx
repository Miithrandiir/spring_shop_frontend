import React from "react";
//@ts-ignore
import {useLoaderData} from "react-router-dom";
import {ProductLoader} from "../loader/ProductLoader";
import ApiImageComponent from "../components/ApiImageComponent";
import AddToBasketButton from "../components/AddToBasketButton";

export default function Product() {

    const data = useLoaderData();

    if (!(data instanceof ProductLoader)) {
        return <h1>Product not found</h1>
    }

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <figure>
                    {data.product.thumbnail !== null ?
                        <ApiImageComponent src={data.product.thumbnail} alt={data.product.name} width={500} height={500}
                                           style={{objectFit: "contain"}}/> :
                        <img src={"https://picsum.photos/500"} alt={data.product.name}/>}
                </figure>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>{data.product.name}</h1>
                        <p>{data.product.description ?? "Le produit ne présente aucune description"}</p>
                        <h2>{data.product.price} €</h2>
                        <div className={"hstack stack-space-between"}>
                            <AddToBasketButton productId={data.product.id}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>

}
