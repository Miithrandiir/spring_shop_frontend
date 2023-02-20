import HighlightedProductComponent from "../components/HighlightedProductComponent";

export default function Home() {
    return <>
        <div className={"content w-100"}>
            <section className={"vstack stack-center stack-vcenter m-5"}>
                <h2>Produits mis en avant</h2>
                <HighlightedProductComponent/>
            </section>
        </div>
    </>
}
