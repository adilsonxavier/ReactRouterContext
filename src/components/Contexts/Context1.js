import React from "react";

export const Context = React.createContext();

export default function ContextProvider(props) {
    const [authorized, setAuthorized] = React.useState(false);

    return (
        <Context.Provider value={{ authorized, setAuthorized}}>
            {props.children}
        </Context.Provider>
        );

}