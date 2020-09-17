import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface BreadcrumbProps{
    to: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ to, children }) => {
    return (
        <StyledBreadcrumb>
            <StyledLink to={to}>
                {children}
            </StyledLink>
        </StyledBreadcrumb>
    );
};

const StyledBreadcrumb = styled.span`
    margin: 0 5px;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover{
        text-shadow: 0px 0px 5px black;
    }
`;

export default Breadcrumb;