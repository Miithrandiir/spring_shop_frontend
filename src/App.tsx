import {MouseEventHandler, useState} from 'react'
import './App.scss'

import CategoriesComponent from "./components/CategoriesComponent";

function App() {

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
                    <li><a href={'#'}>Accueil</a></li>
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

            </main>
        </>
    )
}

export default App
