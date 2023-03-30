import {Order} from "../store/OrderSlice";
import axiosInstance from "../axios";

interface IOrderService {
    placeOrder(order: Array<Order>): Promise<Order>;

    getOrder(): Promise<Array<Order>>;
}

class OrderService implements IOrderService {


    async getOrder(): Promise<Array<Order>> {
        let resp = await axiosInstance.get("/orders")
        return resp.data
    }

    placeOrder(order: Array<Order>): Promise<Order> {
        let items: { product: string; quantity: number; }[] = [];
        order.map((order: Order) => {
            items.push({product: order.id.toString(), quantity: order.quantity})
        });

        return axiosInstance.post('/orders', {items: items});
    }
}

export default OrderService;
