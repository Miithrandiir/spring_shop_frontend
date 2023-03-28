import React, {useState} from 'react'

import CategoriesComponent from "./components/CategoriesComponent";

import './assets/styles/style.scss'
import './App.scss'
import {useAppSelector} from "./store/AuthStore";

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
                    <li><a href={'/'}>Accueil</a></li>
                    <li className={"categories"}>
                        <a href={'#'} onClick={toggleCategories}>Catégorie</a>
                        {categoriesShown && <CategoriesComponent/>}
                    </li>
                </ul>

                <div>
                    <div className={"basket"}>
                        <i className={"fas fa-shopping-basket"}></i>
                        <a href={"/basket"}>
                            {basket.length > 0 && <span>[{basket.length}] </span>}
                            Panier
                        </a>
                    </div>

                    <div className={"login"}>
                        <i className={"fas fa-user"}></i>
                        {user ? <a href={"/account"}>Mon compte</a> : <a href={"/login"}>Connexion</a>}
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
