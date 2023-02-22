import React from "react";
import {Link} from "react-router-dom";

export default function Error() {
    return <>
        <div className={"content w-100"}>
            <section className={"vstack stack-center stack-vcenter m-5"}>
                <h1>Oups, une erreur est survenue</h1>
                <p>La page que vous avez demandée n'existe pas ou n'est pas disponible pour le moment.</p>
                <Link to={'/'} className={'btn btn-orange'}>
                    <i className={'fas fa-backward'}></i>&nbsp;
                    Retourner à l'accueil
                </Link>
            </section>
        </div>
    </>
}
