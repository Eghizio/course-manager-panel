import React from "react";
import styled from "styled-components";
import { Course } from "../../types/student";
import Pill from "../atoms/Pill";


export interface CourseListProps{
    courses: Course[]
}

// maybe change that to card component, generic list component, and change old Card into details
const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div>
            <List>
                {courses.map(({ id, title, categories, teachers }) =>
                    <ListItem key={id}>
                        <Title>{title}</Title>
                        <Teachers>
                            {teachers.map(teacher =>
                                <Text key={teacher}>{teacher}</Text>
                            )}
                        </Teachers>
                        <Categories>
                            {categories.map(category =>
                                <Pill key={category}>{category}</Pill>
                            )}
                        </Categories>
                    </ListItem>
                )}
            </List>
        </div>
    );
};

const List = styled.ul`
    list-style-type: none;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ListItem = styled.li`
    padding: 5px;
    background-color: whitesmoke;
`;

const Title = styled.h5`
    margin: 3px 0;
`;

const Categories = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Teachers = styled.div`
    
`;

const Text = styled.span`

`;

export default CourseList;