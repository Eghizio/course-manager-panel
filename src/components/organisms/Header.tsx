import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import Breadcrumb from "../atoms/Breadcrumb";
import HorizontalNavigation from "../molecules/HorizontalNavigation";
import VerticalNavigation from "../molecules/VerticalNavigation";

import SideDrawer from "../../components/organisms/SideDrawer";
import Hamburger from "../../components/atoms/Hamburger";
import useWindowSize from "../../hooks/useWindowSize";


export interface HeaderProps{

}

const Header: React.FC<HeaderProps> = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
    const { width } = useWindowSize();
    const isMobile = width < 700;


    const navigationItems = [
        { name: "Zajęcia", path: "/browse" },
        { name: "Zapisz się", path: "/enroll" },
        { name: "Dla nauczycieli", path: "/panel" },
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
            {isMobile
            ?
                <React.Fragment>
                    <SideDrawer
                        side="left"
                        isOpen={isDrawerOpened}
                        closeDrawer={() => setIsDrawerOpened(false)}
                    >
                        <VerticalNavigation navItems={navigationItems} isLoggedIn={!!currentUser}/>
                        {/* <ul>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </ul> */}
                    </SideDrawer>
                    <Hamburger onClick={() => setIsDrawerOpened(true)}/>
                </React.Fragment>
            :   <HorizontalNavigation navItems={navigationItems} isLoggedIn={!!currentUser}/>
            }
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: dodgerblue;
    color: white;
    width: 100%;
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