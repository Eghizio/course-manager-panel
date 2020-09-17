import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/organisms/Header";
import Main from "../components/atoms/Main";
import Center from "../components/atoms/Center";
import ToggleText from "../components/molecules/ToggleText";
import SignIn from "../components/molecules/SignIn";
import SignUp from "../components/molecules/SignUp";


export interface LoginProps{

}


// Naming stuff is hard af xD
const Login: React.FC<LoginProps> = (props) => {
    const [isSignInActive, setIsSignInActive] = useState<boolean>(true);
    // make signin signout fadein

    return (
        <div>
            <Header>Sign In</Header>
            <Main>
                <Center>
                    <ToggleText
                        initialText="Sign In"
                        secondaryText="Sign Up"
                        isToggled={isSignInActive}
                        setToggle={setIsSignInActive}
                    />
                    {isSignInActive
                    ?   <FadeIn isActive={isSignInActive}><SignIn/></FadeIn>
                    :   <FadeIn isActive={!isSignInActive}><SignUp/></FadeIn>
                    }
                </Center>
            </Main>
        </div>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; };
    to: { opacity: 1; };
`;

const FadeIn = styled.div<{ isActive: boolean }>`
    animation: ${fadeIn} 1s ease-in;
`;

export default Login;