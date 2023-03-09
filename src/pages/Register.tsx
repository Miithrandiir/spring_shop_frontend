import * as React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import FieldInput from "../components/FieldInput";
import authService from "../services/AuthService";
import RegisterForm from "../form/RegisterForm";
import {useNavigate} from "react-router-dom";

export default function Register() {

    const navigator = useNavigate();

    const form = useFormik<RegisterForm>({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
            firstName: "",
            lastName: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Doit être faire au moins 3 caractères.')
                .required("Ce champs est requis."),
            lastName: Yup.string()
                .min(3, 'Doit être faire au moins 3 caractères.')
                .required("Ce champs est requis."),
            email: Yup.string()
                .email("Ce n'est pas une adresse mail.")
                .required("Ce champs est requis."),
            password: Yup.string()
                .min(3, "Doit être faire au moins 8 caractères.")
                .required("Ce champs est requis."),
            passwordConfirm: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Les mots de passes ne correspondent pas.")
                .required("Ce champs est requis.")
        }),
        onSubmit: values => {

            authService.register(values).then((response) => {
                console.log(response);
            });

            form.resetForm();

            navigator("/login");

        },
    });

    return <>
        <div className={"content w-100"}>
            <section className={"hstack stack-center stack-vcenter m-5 stack-space-evenly"}>
                <div className={"vstack stack-center card w-50"}>
                    <div className={"card-body"}>
                        <h1>Inscription</h1>

                        <form className="content no-form" onSubmit={form.handleSubmit}>

                            <div className="grid2">
                                <FieldInput formik={form} field={"email"} label={"Adresse mail"}
                                            placeholder={"Adresse mail"} icon="alternate_email"/>
                                <FieldInput formik={form} field={"lastName"} label={"Nom"} placeholder={"Nom"}
                                            icon="badge"/>
                                <FieldInput formik={form} field={"firstName"} label={"Prénom"} placeholder={"Prénom"}
                                            icon="badge"/>
                                <FieldInput formik={form} field={"password"} label={"Mot de passe"}
                                            placeholder={"Mot de passe"}
                                            type="password" icon="password"/>
                                <FieldInput formik={form} field={"passwordConfirm"}
                                            label={"Confirmer votre mot de passe"} type="password"
                                            icon="password" placeholder={"Confirmer votre mot de passe"}/>
                            </div>


                            <div className="hstack stack-center mt-5">
                                <button className="btn btn-primary w-100" type="submit">S'inscrire</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    </>

}
