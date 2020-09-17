import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import Header from "../components/organisms/Header";


export interface HomeProps{

}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div>
            <Header>Home</Header>
            <Main>
                <button onClick={() => auth.signOut()}>Sign out!</button>
                <Link to="/panel">Teacher Panel</Link>
            </Main>
        </div>
    );
};

const Main = styled.main`
    padding: 10px;
`;

export default Home;