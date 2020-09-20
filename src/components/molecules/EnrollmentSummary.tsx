import React from "react";
import styled from "styled-components";
import { EnrollData } from "../../types/student"; // will be changed to Student type after retrieving ID from firestore on submit
import CourseList from "./CourseList";


// can just write each row manualy, this component is used only for this type of data tho
// const labelMap: { [K in keyof Omit<EnrollData, "courses">]: string } = {
const labelMap: { [key: string]: string } = {
    firstName: "Imię",
    lastName: "Nazwisko",
    email: "Email",
    studentClass: "Klasa",
};

const EnrollmentSummary: React.FC<EnrollData> = (props) => {
    const { courses, ...studentInfo } = props;

    return (
        <Summary>
            <h3>Gratulacje!</h3>
            <Info>
                {Object.entries(studentInfo).map(([key, info]) =>
                    <StudentInfo key={info}>
                        {labelMap[key]}:
                        <Text>{info}</Text>
                    </StudentInfo>
                )}
                <h4>Zapisano na:</h4>
                <CourseList courses={courses}/>
            </Info>
        </Summary>
    );
};

const Summary = styled.div`
    min-width: 300px;
    border: 1px solid black;
`;

const Info = styled.div`
    padding: 10px;
`;

const StudentInfo = styled.label`
    display: flex;
    flex-direction: column;
`;

const Text = styled.span`
    display: flex;
    align-items: center;
    background-color: dodgerblue;
    color: white;
    padding: 2px 5px;
`;

export default EnrollmentSummary;