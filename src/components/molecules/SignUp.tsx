import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { auth } from "../../firebase";


export interface SignUpProps{
    history: any
}

// change into an organism and use on one page with login
const SignUp: React.FC<SignUpProps> = ({ history }) => {
    const handleSignUp = useCallback(async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        
        try {
            await auth.createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) { console.warn(error); }
    }, [history]);

    return (
    <div>
		<h1>Sign up</h1>
		<form onSubmit={handleSignUp}>
			<label>
				Email
				<input name="email" type="email" placeholder="Email" />
			</label>
			<label>
				Password
				<input name="password" type="password" placeholder="Password" />
			</label>
			<button type="submit">Sign Up</button>
		</form>
    </div>
    );
};

export default withRouter(SignUp);