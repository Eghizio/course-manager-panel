import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type NavigationItem = { name: string, path: string };
export interface NavigationProps{
    navItems: NavigationItem[]
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
    return (
        <StyledNavigation>
            <NavigationList>
                {navItems.map(({ name, path }) => 
                    <StyledLink to={path}>
                        <NavigationListItem>
                            {name}
                        </NavigationListItem>
                    </StyledLink>
                )}
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

export default Navigation;