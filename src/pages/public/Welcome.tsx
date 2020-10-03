import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Page from "../../components/atoms/Page";
import Main from "../../components/atoms/Main";
import Center from "../../components/atoms/Center";
import ToggleText from "../../components/molecules/ToggleText";
import Header from "../../components/organisms/Header";
import SignInForm from "../../components/organisms/SignInForm";
import SignUpForm from "../../components/organisms/SignUpForm";


export interface WelcomeProps{

}


// Naming stuff is hard af xD
const Welcome: React.FC<WelcomeProps> = (props) => {
    const [isSignInActive, setIsSignInActive] = useState<boolean>(true);
    // make signin signout fadein

    return (
        <Page>
            <Header>Welcome</Header>
            <Main>
                <Center>
                    <ToggleText
                        initialText="Sign In"
                        secondaryText="Sign Up"
                        isToggled={isSignInActive}
                        setToggle={setIsSignInActive}
                    />
                    {isSignInActive
                    ?   <FadeIn key="1"><SignInForm/></FadeIn>
                    :   <FadeIn key="2"><SignUpForm/></FadeIn>
                    }
                </Center>
            </Main>
        </Page>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; };
    to { opacity: 1; };
`;

const FadeIn = styled.div`
    animation: ${fadeIn} 800ms ease-in-out;
`;

export default Welcome;