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
                    <Capacity isMobile={isMobile}>
                        <Emoji symbol="👤" />{capacity}
                    </Capacity> {/* needs tooltip i guess */}
                </Heading>
                <Body>
                    <Info>
                        <Detail>
                            <Label>{classes.length > 1 ? "Klasy" : "Klasa"}</Label>
                            <NeumorphicInset>
                                {classes.map(allowedClass => <span key={allowedClass}>{romanNumerals[allowedClass-1]}</span>)}
                            </NeumorphicInset>
                        </Detail>
                        <Detail>
                            <Label>Dzień</Label>
                            <NeumorphicInset>
                                <span>{day}</span> <span>{start} - {end}</span>
                            </NeumorphicInset>
                        </Detail>
                    </Info>
                    <DetailsButton>Więcej</DetailsButton>
                </Body>
            </Right>
        </StyledCard>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; };
    to { opacity: 1; };
`;

const StyledCard = styled.article<{ isMobile: boolean }>`
    /* align-self: stretch; */
    min-width: 270px;
    min-height: 140px;
    max-width: 500px;
    /* width: ${props => props.isMobile ? "300px" : ""}; */
    background-color: blueviolet;
    color: white;
    display: flex;
    /* flex-direction: ${props => props.isMobile ? "column-reverse" : ""}; */
    align-items: stretch;
    overflow: hidden;
    border-radius: 15px;
    transform: scale(0.95);
    transition: transform 300ms ease-out;
    padding-right: 5px;
    &:hover{
        transform: scale(0.97);
        box-shadow: 4px 2px 4px rgba(138, 43, 226, 0.6);
    }
    animation: ${fadeIn} 2s ease-out;
`;

const Left = styled.div`
    padding: 8px;
    min-width: 110px;
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
    flex-wrap: wrap;
    gap: 4px;
`;

const Pill = styled.span`
    align-self: flex-start;
    font-size: xx-small;
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
    padding: 8px;
    background-color: hotpink;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* flex-wrap: wrap; */
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
    align-items: center;
    padding: 5px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Info = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
`;

const NeumorphicInset = styled.span`
    text-transform: capitalize;
    font-size: small;
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px 10px;
    padding: 2px 10px;
    border-radius: 10px;
    background: #ff69b4;
    box-shadow: inset 3px 3px 6px #d95999, inset -3px -3px 6px #ff79cf;
`;

const Label = styled.span`
    padding: 3px;
`;

const DetailsButton = styled.button`
    align-self: flex-end;

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