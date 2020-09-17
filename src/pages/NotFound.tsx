import React from "react";
import styled from "styled-components";
import Main from "../components/atoms/Main";
import Center from "../components/atoms/Center";

export interface NotFoundProps{

}

const NotFound: React.FC<NotFoundProps> = (props) => {
    return (
        <Main>
            <Center>
                <h1>404</h1>
            </Center>
        </Main>
    );
};

export default NotFound;