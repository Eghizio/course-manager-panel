import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { auth } from "../../firebase";
import { AuthContext } from "../../providers/AuthProvider";


export interface SignInProps{
    history: any
}

// change into an organism and use on one page with signup
const SignIn: React.FC<SignInProps> = ({ history }) => {
    const { currentUser } = useContext(AuthContext);

    const handleSignIn = useCallback(async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await auth.signInWithEmailAndPassword(email.value, password.value);
            history.push("/panel");
        } catch(error) { console.warn(error); }
    }, [history]);

    if(currentUser) return <Redirect to="/" />;
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSignIn}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default withRouter(SignIn);