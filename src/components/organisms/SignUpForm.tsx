import React, { useCallback } from "react";
// import styled from "styled-components";
import { withRouter } from "react-router";
import { auth } from "../../firebase";


export interface SignUpFormProps{
    history: any
}

const SignUpForm: React.FC<SignUpFormProps> = ({ history }) => {
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

export default withRouter(SignUpForm);