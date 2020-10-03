import React from "react";
// import styled from "styled-components";
import Page from "../../components/atoms/Page";
import Main from "../../components/atoms/Main";
import Center from "../../components/atoms/Center";

export interface NotFoundProps{

}

const NotFound: React.FC<NotFoundProps> = (props) => {
    return (
        <Page>
            <Main>
                <Center>
                    <h1>404</h1>
                </Center>
            </Main>
        </Page>
    );
};

export default NotFound;