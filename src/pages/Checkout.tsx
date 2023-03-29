import {useDispatch} from "react-redux";
import {useEffect} from "react";
import OrderService from "../services/OrderService";
import {Order, removeAllOrders} from "../store/OrderSlice";
import {useAppSelector} from "../store/AuthStore";
import {useNavigate} from "react-router-dom";

export default function Checkout() {

    const dispatch = useDispatch();
    const basket = useAppSelector(state => state.orders.orders) as Array<Order>;
    const navigate = useNavigate();

    useEffect(() => {
        let orderService = new OrderService();
        orderService.placeOrder(basket).then(() => {
            dispatch(removeAllOrders());
            navigate("/account");
        });
    }, []);

    return <>
    </>
}
