import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { auth } from "../../firebase";

export type NavigationItem = { name: string, path: string };
export interface HorizontalNavigationProps{
    navItems: NavigationItem[]
    isLoggedIn: boolean
}

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({ navItems, isLoggedIn }) => {
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
                {isLoggedIn
                ?   <SignOutButton onClick={() => auth.signOut()}>Sign out</SignOutButton>
                :   <SignInButton onClick={() => history.push("/login")}>Sign in</SignInButton>
                }
            </NavigationList>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    align-self: flex-start;
    min-width: 300px;
    height: 100%;
    margin: 0 30px;
`;

const NavigationList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const NavigationListItem = styled.li`
    display: inline-flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: inherit;
    padding: 0 20px;
    height: 80px;
    &:hover{
        background-color: #6bb6ff;
        text-shadow: 1px 1px 2px black;
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    align-self: center;
    margin-left: 20px;
    padding: 10px;
    border-radius: 2px;
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
        color: green;
        /* text-shadow: 0px 0px 1px green; */
    }
`;

const SignOutButton = styled(Button)`
    &:hover{
        color: red;
    }
`;

export default HorizontalNavigation;