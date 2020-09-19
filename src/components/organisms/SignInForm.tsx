import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import firebase, { auth } from "../../firebase";
import { AuthContext } from "../../providers/AuthProvider";
import Divider from "../atoms/Divider";
import TeachingQuote from "../molecules/TeachingQuote";


export interface SignInFormProps{
    history: any
}

const SignInForm: React.FC<SignInFormProps> = ({ history }) => {
    const { currentUser } = useContext(AuthContext);

    const handleSignIn = useCallback(async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await auth.signInWithEmailAndPassword(email.value, password.value);
            history.push("/panel");
        } catch(error) { console.warn(error); }
    }, [history]);

    const signInWithGoogle = async () => {
        try{
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(googleAuthProvider);
            history.push("/panel");
        } catch(error) { console.warn(error); }
    };

    if(currentUser) return <Redirect to="/" />;
    return (
        <div>
            {/* <h1>Log in</h1> */}
            <Heading>
                <h1>Hello</h1>
                <TeachingQuote/>
            </Heading>
            <form onSubmit={handleSignIn}>
                <Label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </Label>
                <Label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </Label>
                <SubmitButton type="submit">
                    Sign In
                </SubmitButton>
            </form>
            <Divider>or</Divider>
            <GoogleButton onClick={signInWithGoogle}>
                <GoogleLogo src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_GSA.max-2800x2800.png"/>
                Sign In with Google
            </GoogleButton>
        </div>
    );
};

const Heading = styled.div`
    padding: 10px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

const SubmitButton = styled.button`
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid dodgerblue;
    &:hover{
        background-color: skyblue;
        color: white;
        text-shadow: 1px 1px 1px gray;
    }
`;

// need to edit that logo bg color to transparent and scale down, add to assets
const GoogleButton = styled(SubmitButton)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GoogleLogo = styled.img`
    width: 40px;
    height: 40px;
    float: left;
`;

export default withRouter(SignInForm);