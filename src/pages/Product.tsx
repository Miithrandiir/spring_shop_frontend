import React from "react";
//@ts-ignore
import {useLoaderData} from "react-router-dom";
import {ProductLoader} from "../loader/ProductLoader";

export default function Product() {

    const data = useLoaderData();

    if(!(data instanceof ProductLoader)) {
        return <h1>Product not found</h1>
    }

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <figure>
                    <img src={"https://picsum.photos/500"} alt={"Product"}/>
                </figure>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>{data.product.name}</h1>
                        <p>{data.product.description ?? "Le produit ne présente aucune description"}</p>
                        <h2>{data.product.price} €</h2>
                        <div className={"hstack stack-space-between"}>
                            <a href={"/"} className={"btn btn-small btn-fit btn-green"}>
                                <i className={"fas fa-shopping-cart"}></i>&nbsp;
                                Ajouter au panier
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>

}