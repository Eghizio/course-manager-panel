import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Spinner from "../components/atoms/Spinner";

export const AuthContext = React.createContext<{currentUser: firebase.User | null}>({currentUser: null});

const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<null | firebase.User>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsLoading(false);
        });
    }, []);

    // if(isLoading) return <div>Loading ...</div>;
    if(isLoading) return <Spinner/>;
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;