import {addOrder} from "../store/OrderSlice";
import {useDispatch} from "react-redux";

export default function AddToBasketButton({productId}: { productId: number }) {

    const dispatch = useDispatch();

    const onAddToBasket = () => {

        dispatch(addOrder({id: productId, quantity: 1}));

    }


    return <>
        <button className={"btn btn-primary"} onClick={onAddToBasket}>Ajouter au panier</button>
    </>

}
