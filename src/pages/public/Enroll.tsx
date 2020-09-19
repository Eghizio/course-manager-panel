import React from "react";
// import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";
import Center from "../../components/atoms/Center";
import EnrollmentForm from "../../components/organisms/EnrollmentForm";

export interface EnrollProps{

}

const Enroll: React.FC<EnrollProps> = (props) => {
    return (
        <div>
            <Header>Enroll</Header>
            <Main>
                <h2>Enroll</h2>
                <Center>
                    <EnrollmentForm/>
                </Center>
            </Main>
        </div>
    );
};

export default Enroll;