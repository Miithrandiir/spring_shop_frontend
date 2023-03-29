import {addOrder} from "../store/OrderSlice";
import {useDispatch} from "react-redux";
import Product from "../api/models/Product";

export default function AddToBasketButton({product}: { product: Product }) {

    const dispatch = useDispatch();

    const onAddToBasket = () => {

        dispatch(addOrder({id: product.id, product: product.name, quantity: 1}));

    }


    return <>
        <button className={"btn btn-primary"} onClick={onAddToBasket}>Ajouter au panier</button>
    </>

}
