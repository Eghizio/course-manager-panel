import React from "react";
import styled from "styled-components";
import { Course } from "../../types/student";
import Pill from "../atoms/Pill";
import Divider from "../atoms/Divider";


const CourseCard: React.FC<Course> = ({ id, title, categories, description, teachers }) => {
    return (
        <StyledCard>
            <Heading>
                <Title>{title}</Title>
                <Categories>
                    {categories.map(category => <Pill key={category}>{category}</Pill>)}
                </Categories>
                <Divider></Divider>
            </Heading>
            <Content>
                <Description>
                    {description}
                </Description>
            </Content>
            <Teachers>
                Prowadzący: {teachers.map(teacher => <ElegantText key={teacher}>{teacher}</ElegantText>)}
            </Teachers>
        </StyledCard>
    );
};

const StyledCard = styled.section`
    border: 1px solid black;
    padding: 10px;
    transition: transform 500ms ease-in, margin 400ms;
    &:hover{
        transform: scale(1.05);
        margin: 2% 0;
        box-shadow: 2px 5px 8px gray;
    }
`;

const Heading = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

const Title = styled.h3`
    font-size: x-large;
    margin: 8px 0;
`;

const Categories = styled.div`
    display: inline-flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5px;
`;

const Content = styled.article`

`;

const Description = styled.p`

`;

const Teachers = styled(Categories)`
    gap: 20px;
`;

const ElegantText = styled.span`
    font-weight: bold;
`;

export default CourseCard;