import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { EnrollData } from "../../types/student";
import CheckboxList, { ListItem } from "../molecules/CheckboxList";
import { DummyDataContext } from "../../providers/DummyDataProvider";


const classes = ["1A", "2B", "3C"];

export interface EnrollmentFormProps{
    enrollStudent: React.Dispatch<React.SetStateAction<null | EnrollData>>;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ enrollStudent }) => {
    const [checkedCourses, setCheckedCourses] = useState<ListItem[]>([]);
    const { courses } = React.useContext(DummyDataContext); //temp, will be fetching from firestore

    const handleEnrollment = useCallback(async (event) => {
        event.preventDefault();
        const { firstName, lastName, email, studentClass } = event.target.elements;

        const formData: EnrollData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            studentClass: studentClass.value,
            courses: checkedCourses
        };

        // temp validation
        if(Object.values(formData).some(val => val.length === 0)){
            console.log("chotto mate");
            return;
        }

        console.log("firestore add student: ", formData);
        if(formData !== null ) enrollStudent(formData);
    }, [checkedCourses, enrollStudent]);

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
                        <select name="studentClass">
                            <option value="">Wybierz klasę</option>
                            {classes.map(studentClass =>
                                <option key={studentClass} value={studentClass}>
                                    {studentClass}
                                </option>
                            )}
                        </select>
                    </Label>
                    <Label>
                        Zajęcia
                        <CheckboxList
                            items={courses}
                            setChecked={setCheckedCourses}
                        />
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

const SubmitButton = styled.button`

`;

export default EnrollmentForm;