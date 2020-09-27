import React from "react";
import styled, { keyframes } from "styled-components";

export interface BackdropProps{
    active: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Backdrop: React.FC<BackdropProps> = ({ active, onClick }) => {
    return active ? <BackdropActive onClick={onClick}/> : <BackdropInactive onClick={onClick}/>
};

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const BackdropInactive = styled.div`
    z-index: 5;
    background-color: transparent;
    pointer-events: none;
`;

const BackdropActive = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.3s ease-out;
    transition: display 200ms ease-out;
    pointer-events: all;
`;

export default Backdrop;