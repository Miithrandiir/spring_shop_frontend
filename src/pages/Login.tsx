import {useState} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "../store/AuthSlice";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Login() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatcher = useDispatch();
    const navigator = useNavigate();
    function processLogin(event: any) {
        event.preventDefault();

        AuthService.login(username,password).then((response) => {
            dispatcher(setToken(response.token));
            navigator("/");
        }).catch((error) => {
            console.error(error);
        });

    }

    return <>

        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Connexion</h1>
                        <form action={"/"} method={"post"}>
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email</label>
                                <input type={"email"} name={"email"} id={"email"} placeholder={"Email"} value={username} onChange={(e) => {setUsername(e.currentTarget.value)}}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"password"}>Mot de passe</label>
                                <input type={"password"} name={"password"} id={"password"}
                                       placeholder={"Mot de passe"} value={password}
                                       onChange={(e) => {setPassword(e.currentTarget.value)}}
                                />
                            </div>
                            <div className={"form-group"}>
                                <input type={"submit"} value={"Se connecter"} className={"btn btn-green"} onClick={processLogin}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    </>

}
