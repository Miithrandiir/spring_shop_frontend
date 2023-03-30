import Product from "../api/models/Product";
import {Link} from "react-router-dom";
import ApiImageComponent from "./ApiImageComponent";
import AddToBasketButton from "./AddToBasketButton";
import productNoImage from '../assets/steve-johnson-YJGq5H9ofy0-unsplash.jpg'

export default function ProductComponent(props: { product: Product }) {

    return <>
        <div className={"card"}>
            <div className={"card-body hstack stack-center stack-vcenter"}>
                {
                    props.product.thumbnail !== null ?
                        <ApiImageComponent src={props.product.thumbnail} width={200} height={200}
                                           style={{objectFit: "cover"}}/> :
                        <img src={productNoImage} alt={props.product.name} width={200} height={200}
                             style={{objectFit: "cover"}}/>
                }
                <div className={"vstack stack-center"}>
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description ?? "Envie d'en savoir plus ? Contactez notre service client"}</p>
                    <h2>{props.product.price} €</h2>
                    <div className={"hstack stack-space-between"}>
                        <Link to={"/products/" + props.product.id} className={"btn btn-small btn-fit btn-green"}>
                            <i className={"fas fa-eye"}></i>&nbsp;
                            Voir le produit
                        </Link>
                        <AddToBasketButton product={props.product}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
