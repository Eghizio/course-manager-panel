import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { auth } from "../../firebase";


export type NavigationItem = { name: string, path: string };
export interface VerticalNavigationProps{
    navItems: NavigationItem[]
    isLoggedIn: boolean
}

// maybe add active item? if clicked the active one it doesnt do anything tho ;/
const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ navItems, isLoggedIn }) => {
    const history = useHistory();

    return (
        <StyledNavigation>
            <NavigationList>
                {navItems.map(({ name, path }) => 
                    <StyledLink key={path} to={path}>
                        <NavigationListItem>
                            {name}
                        </NavigationListItem>
                    </StyledLink>
                )}
                <Wrapper>
                    {isLoggedIn
                    ?   <SignOutButton onClick={() => auth.signOut()}>Sign out</SignOutButton>
                    :   <SignInButton onClick={() => history.push("/login")}>Sign in</SignInButton>
                    }
                </Wrapper>
            </NavigationList>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    height: 100%;
    /* margin: 0 30px; */
`;

const NavigationList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    padding: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    &:hover{
        color: white;
        background-color: dodgerblue;
    }
`;

const NavigationListItem = styled.li`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 80px;
    /* &:hover{
        text-shadow: 1px 1px 2px lightgray;
        text-decoration: underline;
    } */
`;

const Wrapper = styled.div`
    width: 100%;
`;

const Button = styled.button`
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    border: none;
    align-self: center;
    padding: 10px;
    border-radius: 2px;
    width: 300px;
    text-transform: uppercase;
    font-weight: bold;
    translate: transform 400ms ease-in;
    &:hover{
        transform: scale(1.05);
        box-shadow: 0px 0px 5px white;
        text-shadow: 0px 0px 3px white;
    }
`;

const SignInButton = styled(Button)`
    &:hover{
        color: limegreen;
        text-shadow: 0px 0px 5px green;
    }
`;

const SignOutButton = styled(Button)`
    &:hover{
        color: lightcoral;
        text-shadow: 0px 0px 5px crimson;
    }
`;

export default VerticalNavigation;