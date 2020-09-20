import React from "react";
import styled from "styled-components";
import { Student } from "../../types/student";


export interface StudentListProps{
    students: Student[]
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
    return (
        <ul>

        </ul>
    );
};

export default StudentList;