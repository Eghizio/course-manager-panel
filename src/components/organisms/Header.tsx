import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import Breadcrumb from "../atoms/Breadcrumb";
import Navigation from "../molecules/Navigation";

export interface HeaderProps{

}

const Header: React.FC<HeaderProps> = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    const navigationItems = [
        { name: "Zajęcia", path: "/browse" },
        { name: "Zapisz się", path: "/signup" },
        { name: "Dla nauczycieli", path: "/panel" },
        { name: "iksde logowanie", path: "/login" },
    ];

    return (
        <StyledHeader>
            <Heading>
                <Title>
                    {children}
                </Title>
                <BreadcrumbsBar>
                    <Breadcrumb to="/">
                        Home
                    </Breadcrumb>
                    <Breadcrumb to="/name" >
                        name
                    </Breadcrumb>
                </BreadcrumbsBar>
            </Heading>
            <Navigation navItems={navigationItems} isLoggedIn={!!currentUser}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: dodgerblue;
    color: white;
    height: 80px;
    box-shadow: 0px 0px 7px dodgerblue;
`;

const Heading = styled.div`
    margin-left: 40px;
`;

const Title = styled.h1`
    margin: 0px;
    &:hover{
        color: whitesmoke;
        text-shadow: 1px 1px 3px black;
    }
`;

const BreadcrumbsBar = styled.div`
    display: flex;
    font-size: small;
`;

export default Header;