import {Order} from "../store/OrderSlice";
import axiosInstance from "../axios";

interface IOrderService {
    placeOrder(order: Array<Order>): Promise<Order>;
}

class OrderService implements IOrderService {
    placeOrder(order: Array<Order>): Promise<Order> {
        let items: { product: string; quantity: number; }[] = [];
        order.map((order: Order) => {
            items.push({product: order.id.toString(), quantity: order.quantity})
        });

        return axiosInstance.post('/orders', {items: items});
    }
}

export default OrderService;
