import {useAppSelector} from "../store/AuthStore";
import {Order, removeAllOrders, removeOrder} from "../store/OrderSlice";
import {useEffect, useState} from "react";
import axiosInstance from "../axios";
import Product from "../api/models/Product";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import OrderService from "../services/OrderService";

export default function Basket() {

    const basket = useAppSelector(state => state.orders.orders) as Array<Order>;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    const [outOfStock, setOutOfStock] = useState<Product[] | undefined>(undefined)

    useEffect(() => {
        setOutOfStock(undefined)
        Promise.all(basket.map(async (order) => {
            const data = await axiosInstance.get<Product>(`/products/${order.id}`);
            return data.data;
        })).then(setProducts);
    }, [basket]);

    if (outOfStock != undefined) {
        return <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}  style={{background:"var(--color-fluent-red)"}}>
                    <div className={"card-body"}>
                        <h2>Certains produits sont indisponibles !!!</h2>
                        <ul>
                            {outOfStock.map(p => <li key={p.id}>{p.name}</li>)}
                        </ul>
                        <button className={"btn"} onClick={() => setOutOfStock(undefined)}>Retour</button>
                    </div>
                </div>
            </section>
        </div>
    }

    const onOrder = () => {
        //navigate("/checkout");
        let orderService = new OrderService();
        orderService.placeOrder(basket).then((e) => {
            setOutOfStock(undefined)
            dispatch(removeAllOrders());
            navigate("/account");
        }).catch(e => {
            if (e.response.status === 400 && e.response.data.message === "Out of stock") {
                setOutOfStock(e.response.data.products)
            }
        });
    };

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
                                    return <li className={"hstack stack-vcenter stack-space-evenly m-2"}
                                               style={{background: "rgba(211,211,211,0.2)", borderRadius: '3px'}}
                                               key={product.id}>

                                        <h2>{product.name}</h2>
                                        <p>Quantité: <b>{basket.at(index) !== undefined && basket[index].quantity}</b>
                                        </p>
                                        <p>P.U: <b>{product.price} €</b></p>
                                        <p>Total: {basket[index].quantity * product.price} €</p>
                                        <button onClick={() => dispatch(removeOrder(product.id))}
                                                className={"btn btn-danger"}>
                                            <i className={"fas fa-trash"}/>
                                        </button>

                                    </li>
                                })
                            }
                        </ul>

                        {products.length !== 0 && <button onClick={onOrder} className={"btn btn-green w-100 text-center"}>Commander</button>}
                    </div>
                </div>
            </section>
        </div>
    </>
}
