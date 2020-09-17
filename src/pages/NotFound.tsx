import React from "react";
import styled from "styled-components";
import Center from "../components/atoms/Center";

export interface NotFoundProps{

}

const NotFound: React.FC<NotFoundProps> = (props) => {
    return (
        <Center>
            <h1>404</h1>
        </Center>
    );
};

export default NotFound;