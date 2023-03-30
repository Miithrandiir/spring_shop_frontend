import React, {useState} from 'react'

import CategoriesComponent from "./components/CategoriesComponent";

import './assets/styles/style.scss'
import './App.scss'
import {useAppSelector} from "./store/AuthStore";
import {Link} from "react-router-dom";

function App({children}: { children: React.ReactNode }) {

    const [categoriesShown, setCategoriesShown] = useState<boolean>(false);
    const basket = useAppSelector(state => state.orders.orders);

    // const [products, setProducts] = useState<Product[]>([]);

    const toggleCategories = (event: any) => {
        event.preventDefault();
        setCategoriesShown(!categoriesShown);
    }

    const user = useAppSelector(state => state.auth.token);

    return (
        <>
            <header>
                <h1>SpringShop</h1>
                <ul>
                    <li><Link to={'/'}>Accueil</Link></li>
                    <li className={"categories"}>
                        <Link to={'#'} onClick={toggleCategories}>Catégorie</Link>
                        {categoriesShown && <CategoriesComponent/>}
                    </li>
                </ul>

                <div>
                    <div className={"basket"}>
                        <i className={"fas fa-shopping-basket"}></i>
                        <Link to={"/basket"}>
                            {basket.length > 0 && <span>[{basket.length}] </span>}
                            Panier
                        </Link>
                    </div>

                    <div className={"login"}>
                        <i className={"fas fa-user"}></i>
                        {user ? <Link to={"/account"}>Mon compte</Link> : <Link to={"/login"}>Connexion</Link>}
                    </div>
                </div>

            </header>
            <main className={"body"}>
                {children}
            </main>
        </>
    )
}

export default App
