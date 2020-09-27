import React from "react";
// import styled from "styled-components";
import Page from "../../components/atoms/Page";
import Main from "../../components/atoms/Main";
import Header from "../../components/organisms/Header";

export interface HomeProps{

}

// 700px width breaks screen so should go mobile then
// rearrange sidedrawer and hamburger into header component, combine with navigation(drawer child) and responsive
const Home: React.FC<HomeProps> = (props) => {
    return (
        <Page>
            <Header>
                Home
            </Header>
            <Main>
                <h2>Home</h2>
                <p>
                    Jeżeli jesteś uczniem, przeglądnij se zajęcia byczq. <br/>
                    Jeżeli jesteś nauczycielem zaloguj się aby mieć dostęp do panelu nauczyciela. <br/>
                    essa panowie z trickiem <br/>
                </p>
                <p> jakieś tam inne bajerki żeby ładnie wyglądało i żeby dobrze nawigować usera po stronie </p>
            </Main>
        </Page>
    );
};

export default Home;