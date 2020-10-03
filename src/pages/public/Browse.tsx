import React from "react";
import styled from "styled-components";
import Page from "../../components/atoms/Page";
import Main from "../../components/atoms/Main";
import Header from "../../components/organisms/Header";
import CourseCard from "../../components/molecules/CourseCard";
import { DummyDataContext } from "../../providers/DummyDataProvider";
import Card from "../../components/molecules/Card";


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
                    {courses.map(course => <CourseCard key={course.id} {...course}/>)}
                </CourseList>
            </Main>
        </Page>
    );
};

const CourseList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    margin: 5px;
    overflow: auto;
`;

export default Browse;