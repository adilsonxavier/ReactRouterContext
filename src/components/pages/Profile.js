import React from "react";
import { Redirect } from "react-router-dom";

import { Context } from "../Contexts/Context1";

import { useHistory } from "react-router-dom";


function Profile() {

    const { authorized, setAuthorized } = React.useContext(Context)

    const history = useHistory();

    if (!authorized) {
        return (<Redirect to="/login"/>)
    }

    const handleLogout = () => {
        setAuthorized(false);
        history.push("/Login");

    }
    return (
        <section >
            <h1>pag de profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </section>

    );
}
export default Profile;