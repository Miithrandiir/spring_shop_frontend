import {useState} from 'react'
import './App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"

function App() {

    return (
        <main className={"body"}>
            <header>
                <h1>SpringShop</h1>
                <ul>
                    <li><a href={'#'}>Accueil</a></li>
                    <li><a href={'#'}>Catégorie</a></li>
                    <li><a href={'#'}>Mon compte</a></li>
                </ul>
                <div className={"login"}>
                    <FontAwesomeIcon icon={faUser}/>
                    <a href={"/"}>Connexion</a>
                </div>
            </header>
        </main>
    )
}

export default App
