import React from "react";
// import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";

export interface HomeProps{

}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div>
            <Header>Home</Header>
            <Main>
                <h2>Main</h2>
            </Main>
        </div>
    );
};

export default Home;