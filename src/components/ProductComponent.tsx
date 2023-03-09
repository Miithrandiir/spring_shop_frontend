import Product from "../api/models/Product";
import {Link} from "react-router-dom";
import ApiImageComponent from "./ApiImageComponent";

export default function ProductComponent(props: { product: Product }) {

    return <>
        <div className={"card"}>
            <div className={"card-body hstack stack-center stack-vcenter"}>
                {
                    props.product.thumbnail !== null ?
                        <ApiImageComponent src={props.product.thumbnail} width={200} height={200}
                                           style={{objectFit: "cover"}}/> :
                        <img src={"https://picsum.photos/175?blur=2"} alt={props.product.name} width={200} height={200}
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
                        <a href={"/"} className={"btn btn-small btn-fit"}>
                            <i className={"fas fa-shopping-cart"}></i>&nbsp;
                            Ajouter au panier
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}
