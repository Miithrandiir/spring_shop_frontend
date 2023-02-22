import React, {useState} from 'react'

import CategoriesComponent from "./components/CategoriesComponent";

import './assets/styles/style.scss'
import './App.scss'

function App({children}: { children: React.ReactNode}) {

    const [categoriesShown, setCategoriesShown] = useState<boolean>(false);

    const toggleCategories = (event: any) => {
        event.preventDefault();
        setCategoriesShown(!categoriesShown);
    }


    return (
        <>
            <header>
                <h1>SpringShop</h1>
                <ul>
                    <li><a href={'/'}>Accueil</a></li>
                    <li className={"categories"}>
                        <a href={'#'} onClick={toggleCategories} >Catégorie</a>
                        {categoriesShown && <CategoriesComponent/>}
                    </li>

                    <li><a href={'#'}>Mon compte</a></li>
                </ul>
                <div className={"login"}>
                    <i className={"fas fa-user"}></i>
                    <a href={"/"}>Connexion</a>
                </div>
            </header>
            <main className={"body"}>
                {children}
            </main>
        </>
    )
}

export default App
