import React from "react";
import styled, { keyframes } from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { Course } from "../../types/student";
import Emoji from "../atoms/Emoji";


// const romanNumerals: { [key: number]: string } = {
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII"
// };

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

// show description from behind (slide right and left to reveal on click)
const Card: React.FC<Course> = (props) => {
    const { id, title, teachers, categories, capacity, date: { day, time: { start, end } }, classes, description } = props;
    const { width } = useWindowSize();
    const isMobile = width < 700;



    return (
        <StyledCard isMobile={isMobile}>
            <Left>
                <Teachers>
                    <Title>Prowadzący</Title>
                    <List>
                        {teachers.map(teacher => <li key={teacher}>{teacher}</li>)}
                    </List>
                </Teachers>
                <Categories>
                    {categories.map(category => <Pill key={category}>{category}</Pill>)}
                </Categories>
            </Left>
            <Right>
                <Heading>
                    <Title>{title}</Title>
                    <Capacity isMobile={isMobile}><Emoji symbol="👤" />{capacity}</Capacity> {/* needs tooltip i guess */}
                </Heading>
                <Body>
                    <Middle>
                        <Date>
                            <Day>{day}</Day>
                            <Time> {start} - {end}</Time>
                        </Date>
                    </Middle>
                    <Label>Klasy</Label>
                    <Bottom>
                        <Classes>
                            {classes.map(allowedClass => <span key={allowedClass}>{romanNumerals[allowedClass-1]}</span>)}
                        </Classes>
                        <DetailsButton>Więcej</DetailsButton>
                    </Bottom>
                </Body>
            </Right>
        </StyledCard>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; };
    to { opacity: 1; };
`;

const StyledCard = styled.header<{ isMobile: boolean }>`
    /* align-self: stretch; */
    min-width: 300px;
    min-height: 140px;
    max-height: 300px;
    max-width: 700px;
    /* width: ${props => props.isMobile ? "300px" : ""}; */
    background-color: blueviolet;
    color: white;
    display: flex;
    /* flex-direction: ${props => props.isMobile ? "column-reverse" : ""}; */
    align-items: stretch;
    overflow: hidden;
    border-radius: 15px;
    transition: transform 150ms ease-out;
    padding-right: 5px;
    &:hover{
        transform: scale(1.01);
        box-shadow: 5px 1px 6px rgba(138, 43, 226, 0.6);
    }
    animation: ${fadeIn} 2s ease-out;
`;

const Left = styled.div`
    padding: 10px;
    width: 40%;
    background-color: darkslateblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Teachers = styled.div`

`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-bottom: 5px;
`;

const Categories = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 4px;
`;

const Pill = styled.span`
    align-self: flex-start;
    font-size: xx-small;
    /* background-color: mediumorchid; */
    padding: 3px 4px;
    text-shadow: 0px 0px 1px black;

    border-radius: 4px;
    background-color: #942ef2;
    background-color: #7c27cb;
    box-shadow:  inset 3px -3px 7px #7525c0, inset -3px 3px 7px #9f31ff;

    &:hover{
        box-shadow: 0px 0px 5px hotpink;
    }
`;


const Right = styled.div`
    padding: 10px;
    width: 60%;
    background-color: hotpink;
`;

const Heading = styled.header`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;

const Title = styled.h4`
    margin: 5px 0;
    text-transform: capitalize;
    overflow-wrap: break-word;
    word-break: break-word;
`;

const Capacity = styled.span<{ isMobile: boolean }>`
    display: flex;
    flex-direction: ${props => props.isMobile ? "column" : ""};
    padding: 5px;
`;

const Body = styled.div`

`;

const Middle = styled.div`

`;

const Date = styled.div`
    font-size: small;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
`;

const Day = styled.span`
    text-transform: capitalize;
`;

const Time = styled.span``;

const Bottom = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;

const Label = styled.span`
    padding: 3px;
`;

const Classes = styled.div`
    font-size: calc(1vw + 6px);
    width: 72%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 2px 8px;
    margin-top: 2px;
    border-radius: 20px;
    background: #ff69b4;
    box-shadow: inset 3px 3px 6px #d95999, inset -3px -3px 6px #ff79cf;
`;

const DetailsButton = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: #ff69b4;
    border-color: transparent;
    border-radius: 4px;
    background: #ffffff;
    box-shadow:  4px 4px 8px #ff70c1, -4px -4px 8px #e65fa2;
    &:hover{
        box-shadow:  4px 4px 8px #e65fa2, -4px -4px 8px #ff70c1;
        text-shadow: 0px -1px 2px rgba(0, 0, 0, 0.3);
    }
`;

export default Card;


