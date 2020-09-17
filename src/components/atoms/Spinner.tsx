import React from "react";
import styled, { keyframes } from "styled-components";
import Center from "./Center";

const Spinner: React.FC = () => <Center><Loader/></Center>;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const Loader = styled.div`
    max-width: 300px;
    height: auto;
    border-top: 3px solid dodgerblue;
    border-radius: 50%;
    animation: ${spin} 1.2s ease-in-out infinite;
`;

export default Spinner;