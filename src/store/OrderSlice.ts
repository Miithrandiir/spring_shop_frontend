import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Order {
    id: number;
    quantity: number;
}

export const OrdersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: JSON.parse(localStorage.getItem("orders") || "[]") as Order[]
    },
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {

            let index = state.orders.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
                state.orders[index].quantity += action.payload.quantity;
            } else {
                state.orders.push(action.payload);
            }

            localStorage.setItem("orders", JSON.stringify(state.orders));
        },
        removeOrder: (state, action: PayloadAction<number>) => {
            state.orders = state.orders.filter(order => order.id !== action.payload);
            localStorage.setItem("orders", JSON.stringify(state.orders));

        }
    }
});

export const {addOrder} = OrdersSlice.actions;
export const {removeOrder} = OrdersSlice.actions;
export default OrdersSlice.reducer;
