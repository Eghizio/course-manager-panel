import React from "react";
import styled from "styled-components";

export interface HamburgerProps{
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Hamburger: React.FC<HamburgerProps> = (props) => {
    return (
        <StyledHamburger {...props}>
            <Line/>
            <Line/>
            <Line/>
        </StyledHamburger>
    );
};

const StyledHamburger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    /* position: fixed; */
    width: 40px;
    height: 40px;
    padding: 10px 15px;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
`;

export default Hamburger;