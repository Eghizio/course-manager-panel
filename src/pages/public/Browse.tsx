import React from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";
import CourseCard from "../../components/molecules/CourseCard";
import { DummyDataContext } from "../../providers/DummyDataProvider";


export interface BrowseProps{

}

const Browse: React.FC<BrowseProps> = (props) => {
    const { courses } = React.useContext(DummyDataContext); //temp, will be fetching from firestore
    
    return (
        <div>
            <Header>Browse</Header>
            <Main>
                <CourseList>
                    {courses.map(course => <CourseCard key={course.id} {...course}/>)}
                </CourseList>
            </Main>
        </div>
    );
};

const CourseList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 50px;
    overflow: auto;
`;

export default Browse;