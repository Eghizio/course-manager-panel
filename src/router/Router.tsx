import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Page from "../pages";


const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page.Public.Home}/>
                <Route exact path="/browse" component={Page.Public.Browse}/>
                <Route exact path="/login" component={Page.Public.Login}/>
                <PrivateRoute exact path="/panel" component={Page.Private.Panel}/>
                <Route component={Page.Public.NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;