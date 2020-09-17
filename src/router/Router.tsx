import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import * as Page from "../pages";


const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page.Home}/>
                <Route exact path="/browse" component={Page.Browse}/>
                <Route exact path="/login" component={Page.Login}/>
                <PrivateRoute exact path="/panel" component={Page.Panel}/>
                <Route component={Page.NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;