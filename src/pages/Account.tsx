import {useLoaderData} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {UserLoader} from "../loader/UserLoader";
import Order from "../api/models/Order";
import OrderService from "../services/OrderService";

export default function Account() {

    const user = useLoaderData();

    const [orders, setOrders] = useState<Order[]>([])

    if (!(user instanceof UserLoader)) {
        return <h1>User not found</h1>
    }


    useEffect(() => {
        if (!(user instanceof UserLoader)) return;
        let orderService = new OrderService();

        orderService.getOrder().then(x => {
            //@ts-ignore
            setOrders(x)
        })

    }, [user])

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Mon compte</h1>

                        <form action={"/"} method={"post"}>
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email</label>
                                <input type={"email"} name={"email"} id={"email"} value={user.user.email}
                                       disabled={true}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"firstname"}>Prénom</label>
                                <input type={"text"} name={"firstname"} id={"firstname"} value={user.user.firstName}
                                       disabled={true}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"lastname"}>Nom</label>
                                <input type={"text"} name={"lastname"} id={"lastname"} value={user.user.lastName}
                                       disabled={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Mes commandes</h1>

                        <ul>
                            {
                                orders.length === 0 && <h2>Aucune commande</h2>
                            }
                            {
                                orders.map((order, index) => {
                                    return <li className={"hstack stack-vcenter stack-space-evenly m-2"}
                                               style={{background: "rgba(211,211,211,0.2)", borderRadius: '3px'}}
                                               key={order.id}>

                                        <h2>#{order.id}</h2>
                                        <p>Nombre de
                                            produits: <b>{order.items.map(x => x.quantity).reduce((partialSum, a) => partialSum + a, 0)}</b>
                                        </p>
                                        <p>Total: {order.price} €</p>

                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </>

}
