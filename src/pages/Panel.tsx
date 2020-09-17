import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import Header from "../components/organisms/Header";
import Main from "../components/atoms/Main";

export interface PanelProps{

}

const Panel: React.FC<PanelProps> = (props) => {
    return (
        <div>
            <Header>Panel</Header>
            <Main>
                <h2>Panel</h2>
            </Main>
        </div>
    );
};

export default Panel;