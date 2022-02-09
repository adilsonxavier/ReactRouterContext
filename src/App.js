import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

import  ContextProvider from "./components/Contexts/Context1";

export default function App() {
    return (
        <Router >


            <Header />

            <Container >
            <Switch>
                    <ContextProvider>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route  path="/login">
                            <Login />
                        </Route>
                        <Route path="/profile" >
                            <Profile />
                        </Route>
                    </ContextProvider>
              
             </Switch>

            </Container>
          <Footer/>
        </Router>

    );
}