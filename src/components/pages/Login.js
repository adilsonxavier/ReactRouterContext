import React, { useContext }from "react";

import { useHistory } from "react-router-dom";

import { Context }  from "../Contexts/Context1";

function Login() {

    const {setAuthorized } = useContext(Context);

    const history = useHistory();

    const handleRedirect = () => {
        //Login deu certo
        setAuthorized(true);
        history.push("/profile");
    }

    return (
        <section >
            <h1>pag de login</h1>

            <button onClick={handleRedirect } >login</button>

       </section>

        );
}
export default Login;