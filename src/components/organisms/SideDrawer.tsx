import React from "react";
import styled from "styled-components";
import Backdrop from "../atoms/Backdrop";

export interface SideDrawerProps{
    isOpen: boolean;
    closeDrawer?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    side: "left" | "right";
}

// sign in/out toggle text overlaps
// make it fullscreen
const SideDrawer: React.FC<SideDrawerProps> = ({ side, isOpen, closeDrawer, children }) => {
    return (
        <React.Fragment>
            <Backdrop active={isOpen} onClick={closeDrawer}/>
            <Drawer side={side} isOpen={isOpen}>
                <Row side={side}>
                    <CloseButton role="button" onClick={closeDrawer}/>
                </Row>
                {children}
            </Drawer>
        </React.Fragment>
    );
};

const Drawer = styled.div<SideDrawerProps>`
    z-index: 10;
    position: fixed;
    top: 0;
    left: ${props => props.side === "left" ? "0" : ""};
    right: ${props => props.side === "right" ? "0" : ""};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0px 30px;
    min-width: 300px;
    max-width: 45%;
    background-color: white;
    transform: ${props => props.side === "left" ? "translate(-100%)" : "translate(100%)"};
    transition: transform 400ms ease-out, box-shadow 400ms ease-in;
    box-shadow: ${props => props.isOpen ? "2px 0px 10px rgba(0, 0, 0, 0.8)" : ""};
    transform: ${props => props.isOpen ? "translate(0%)" : ""};
`;

const Row = styled.div<{ side: SideDrawerProps["side"] }>`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: ${props => props.side === "left" ? "row-reverse" : "row"};
`;

const CloseButton = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    padding: 2px;
    width: 35px;
    height: 35px;
    transition: transform 500ms ease-in-out;
    &::before{
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 30px;
        height: 2px;
        background-color: black;
        transform: translate(-50%) rotate(45deg);
    }
    &::after{
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 30px;
        height: 2px;
        background-color: black;
        transform: translate(-50%) rotate(135deg);
    }
    &:hover{
        /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7); */
        transform: rotate(360deg);
    }
`;

export default SideDrawer;