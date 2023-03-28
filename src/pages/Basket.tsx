import {useAppSelector} from "../store/AuthStore";
import {Order, removeOrder} from "../store/OrderSlice";
import {useEffect, useState} from "react";
import axiosInstance from "../axios";
import Product from "../api/models/Product";
import {useDispatch} from "react-redux";

export default function Basket() {

    const basket = useAppSelector(state => state.orders.orders) as Array<Order>;
    const dispatch = useDispatch();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        Promise.all(basket.map(async (order) => {
            const data = await axiosInstance.get<Product>(`/products/${order.id}`);
            return data.data;
        })).then(setProducts);
    }, []);

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Panier</h1>

                        <ul>
                            {
                                products.length === 0 && <h2>Aucun produit dans le panier</h2>
                            }
                            {
                                products.map((product, index) => {
                                    return <li className={"hstack stack-vcenter stack-space-evenly m-2"} style={{background: "rgba(211,211,211,0.2)", borderRadius: '3px'}} key={product.id}>

                                            <h2>{product.name}</h2>
                                            <p>Quantité: <b>{basket.at(index) !== undefined && basket[index].quantity}</b></p>
                                            <p>P.U: <b>{product.price} €</b></p>
                                            <p>Total: {product.quantity * product.price} €</p>
                                            <button onClick={() => dispatch(removeOrder(product.id))} className={"btn btn-danger"}>
                                                <i className={"fas fa-trash"}/>
                                            </button>

                                    </li>
                                })
                            }
                        </ul>

                        <a href={"/checkout"} className={"btn btn-green w-100 text-center"}>Commander</a>
                    </div>
                </div>
            </section>
        </div>
    </>
}
