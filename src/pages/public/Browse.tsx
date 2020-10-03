import React from "react";
import styled from "styled-components";
import Page from "../../components/atoms/Page";
import Main from "../../components/atoms/Main";
import Header from "../../components/organisms/Header";
import Card from "../../components/molecules/Card";
import { DummyDataContext } from "../../providers/DummyDataProvider";


export interface BrowseProps{

}

const Browse: React.FC<BrowseProps> = (props) => {
    const { courses } = React.useContext(DummyDataContext); //temp, will be fetching from firestore

    return (
        <Page>
            <Header>Browse</Header>
            <Main>
                <CourseList>
                    {courses.map(course => <Card key={course.id} {...course}/>)}
                </CourseList>
            </Main>
        </Page>
    );
};

const CourseList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 15px;
    padding: 15px 0;
    overflow: auto;
`;

export default Browse;