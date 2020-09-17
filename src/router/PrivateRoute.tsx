import React, { ElementType, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


export interface PrivateRouteProps{
    path: string
    exact: boolean
    component: ElementType
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent, ...props }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...props}
            render={routeProps =>
                !!currentUser
                ?   <RouteComponent {...routeProps}/>
                :   <Redirect to="/"/>
            }
        />
    );
};

export default PrivateRoute;