import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import * as Page from "../pages";


const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" comp={Page.Home}/>
                <Route exact path="/signup" component={Page.SignUp}/>
                <Route exact path="/login" component={Page.LogIn}/>
                <Route component={Page.NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;