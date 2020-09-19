import React from "react";
import styled from "styled-components";


const Pill: React.FC = ({ children }) => {
    return (
        <StyledPill>
            {children}
        </StyledPill>
    );
};

const StyledPill = styled.span`
    padding: 3px;
    font-size: small;
    background-color: mediumorchid;
    color: white;
    border-radius: 5px;
    &:hover{
        box-shadow: 0px 0px 5px hotpink;
    }
`;

export default Pill;