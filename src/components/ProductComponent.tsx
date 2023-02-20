import Product from "../api/models/Product";

export default function ProductComponent(props: { product: Product }) {

    return <>
        <div className={"card"}>
            <div className={"card-body hstack stack-center stack-vcenter"}>
                {
                    props.product.thumbnail !== null ?
                        <img src={props.product.thumbnail} alt={props.product.name}/> :
                        <img src={"https://picsum.photos/175?blur=2"} alt={props.product.name}/>
                }
                <div className={"vstack stack-center"}>
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description ?? "Envie d'en savoir plus ? Contactez notre service client"}</p>
                    <h2>{props.product.price} €</h2>
                    <a href={"/"} className={"btn btn-small btn-fit"}>
                        <i className={"fas fa-shopping-cart"}></i>&nbsp;
                        Ajouter au panier
                    </a>
                </div>
            </div>
        </div>
    </>
}
