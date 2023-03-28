import {useLoaderData} from "react-router-dom";
import React from "react";
import {UserLoader} from "../loader/UserLoader";

export default function Account() {

    const user = useLoaderData();

    if (!(user instanceof UserLoader)) {
        return <h1>User not found</h1>
    }

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Mon compte</h1>

                        <form action={"/"} method={"post"}>
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email</label>
                                <input type={"email"} name={"email"} id={"email"} value={user.user.email} disabled={true}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"firstname"}>Prénom</label>
                                <input type={"text"} name={"firstname"} id={"firstname"} value={user.user.firstName} disabled={true}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"lastname"}>Nom</label>
                                <input type={"text"} name={"lastname"} id={"lastname"} value={user.user.lastName} disabled={true}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </>

}
