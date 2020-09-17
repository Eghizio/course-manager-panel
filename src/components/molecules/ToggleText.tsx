import React, { useState } from "react";
import styled from "styled-components";

export interface ToggleTextProps{
    initialText: string
    secondaryText: string
    isToggled: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleText: React.FC<ToggleTextProps> = ({ initialText, secondaryText, isToggled, setToggle }) => {
    return (
        <Toggle isFirst={isToggled}>
            <Text isActive={isToggled} onClick={() => setToggle(true)}>
                {initialText}
            </Text>
            <Text isActive={!isToggled} onClick={() => setToggle(false)}>
                {secondaryText}
            </Text>
        </Toggle>
    );
};

const Toggle = styled.div<{ isFirst: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    padding: 10px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        bottom: 4px;
        left: 1px;
        width: 38%;
        height: 2px;
        background-color: black;
        transition: transform 700ms ease-in-out;
        transform: ${props => props.isFirst ? "translateX(0px)" : "translateX(160px)"};
    }
`;

const Text = styled.span<{ isActive: boolean }>`
    font-size: 21px;
    padding: 5px 10px;
    user-select: none;
    transition: opacity 500ms ease-in;
    color: ${props => props.isActive ? "black" : "gray"};
    opacity: ${props => props.isActive ? "1" : "0.4"};
    &:hover{
        opacity: 1;
    }
`;

export default ToggleText;