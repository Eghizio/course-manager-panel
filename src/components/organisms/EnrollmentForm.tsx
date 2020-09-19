import React, { useCallback } from "react";
import styled from "styled-components";
import { Class } from "../../types/class";


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

const classes = ["1A", "2B", "3C"];

export interface EnrollmentFormProps{

}

const EnrollmentForm: React.FC<EnrollmentFormProps> = (props) => {

    const handleEnrollment = useCallback(async (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        const { firstName, lastName, email, studentsClass, extraClass } = event.target.elements;

        console.log({ firstName, lastName, email, studentsClass, extraClass });
        [firstName, lastName, email, studentsClass].forEach(input => console.log(input.value))
        extraClass.forEach((checkbox: any) => console.log(checkbox.checked));

        console.log("firebase add student");
    }, []);

    return (
        <div>
            <h3>Enroll now ugabuga</h3>
            <Form onSubmit={handleEnrollment}>
                <Rows>
                    <Label>
                        Imię
                        <input type="text" name="firstName" placeholder="Imię"/>
                    </Label>
                    <Label>
                        Nazwisko
                        <input type="text" name="lastName" placeholder="Nazwisko"/>
                    </Label>
                    <Label>
                        Email
                        <input type="email" name="email" placeholder="Email"/>
                    </Label>
                    <Label>
                        Klasa
                        <select name="studentsClass">
                            <option value=""></option>
                            {classes.map(studentsClass =>
                                <option key={studentsClass} value={studentsClass}>
                                    {studentsClass}
                                </option>
                            )}
                        </select>
                    </Label>
                    <Label>
                        Zajęcia
                        <ClassList>
                            {cards.map(({id, title}) => 
                                <ClassListItem key={id}>
                                    <input type="checkbox" name="extraClass"/>
                                    {title}
                                </ClassListItem>
                            )}
                        </ClassList>
                    </Label>
                </Rows>
                <SubmitButton>
                    Enroll byczq
                </SubmitButton>
            </Form>
        </div>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
`;

const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ClassListItem = styled.div`

`;

const SubmitButton = styled.button`

`;

export default EnrollmentForm;