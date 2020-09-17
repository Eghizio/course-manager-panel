import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


export interface PrivateRouteProps{
    path: string
    exact: boolean
    comp: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const { currentUser } = useContext(AuthContext);
    const { comp: RouteComponent } = props;

    return (
        <Route
            {...props}
            render={routeProps =>
                !!currentUser
                ?   <RouteComponent {...routeProps}/>
                :   <Redirect to="/login"/>
            }
        />
    );
};

export default PrivateRoute;