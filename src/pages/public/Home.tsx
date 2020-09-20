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
                <h2>Home</h2>
                <p>
                    Jeżeli jesteś uczniem, przeglądnij se zajęcia byczq. <br/>
                    Jeżeli jesteś nauczycielem zaloguj się aby mieć dostęp do panelu nauczyciela. <br/>
                    essa panowie z trickiem <br/>
                </p>
                <p> jakieś tam inne bajerki żeby ładnie wyglądało i żeby dobrze nawigować usera po stronie </p>
            </Main>
        </div>
    );
};

export default Home;