import React, {useState} from 'react'

import CategoriesComponent from "./components/CategoriesComponent";

import './assets/styles/style.scss'
import './App.scss'
import {useAppSelector} from "./store/AuthStore";

function App({children}: { children: React.ReactNode }) {

    const [categoriesShown, setCategoriesShown] = useState<boolean>(false);

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

                {user ? <div className={"login"}>
                        <i className={"fas fa-user"}></i>
                        <a href={"/account"}>Mon compte</a>
                    </div> :
                    <div className={"login"}>
                        <i className={"fas fa-user"}></i>
                        <a href={"/login"}>Connexion</a>
                    </div>
                }

            </header>
            <main className={"body"}>
                {children}
            </main>
        </>
    )
}

export default App
