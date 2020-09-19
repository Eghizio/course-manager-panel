import React from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";
import { Class } from "../../types/class";
import ClassCard from "../../components/organisms/ClassCard";

const cards: Class[] = [
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
];

export interface BrowseProps{

}

const Browse: React.FC<BrowseProps> = (props) => {
    return (
        <div>
            <Header>Browse</Header>
            <Main>
                <ClassList>
                    {cards.map(card => <ClassCard key={card.id} {...card}/>)}
                </ClassList>
            </Main>
        </div>
    );
};

const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 50px;
    overflow: auto;
`;

export default Browse;