import React from "react";
import styled from "styled-components";
import { Student } from "../../types/student";


export interface StudentTableProps{
    students: Student[]
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    // // distributions
    // const numOfCourses = students.map(el => el.courses.length).join();
    // console.log("1: ", (numOfCourses.match(/1/g) || []).length);
    // console.log("2: ", (numOfCourses.match(/2/g) || []).length);
    // console.log("3: ", (numOfCourses.match(/3/g) || []).length);
    
    //extract item to component and add state to control details (courses, etc)

    // elevate those functionalities above?
    const sortBy = () => {};
    const filterBy = () => {};
    const searchBy = () => {};

    return (
        <Table>
            <thead>
                <tr>
                    <HeaderCell>l.p.</HeaderCell>
                    <HeaderCell>Nazwisko</HeaderCell>
                    <HeaderCell>Imie</HeaderCell>
                    <HeaderCell>Klasa</HeaderCell>
                    <HeaderCell>Szczegóły</HeaderCell>
                </tr>
            </thead>
            <tbody>
            {students.map(({ id, firstName, lastName, email, studentClass, courses }, i) =>
                <ListItem key={id}>
                    <Cell as="th">{i+1}.</Cell>
                    <Cell>{lastName}</Cell>
                    <Cell>{firstName}</Cell>
                    <Cell>{studentClass}</Cell>
                    <Cell>
                        <DetailsButton onClick={() => console.log(id)}>Więcej</DetailsButton>
                    </Cell>
                    {/* <Cell>{email}</Cell> //probably will be deleted*/}
                </ListItem>
            )}
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    padding: 5px;
`;

const ListItem = styled.tr`
    padding: 0 5px;
    margin: 3px;
    border-bottom: 1px solid gray;
`;

const HeaderCell = styled.th`
    padding: 6px;
    background-color: gray;
`;

const Cell = styled.td`
    text-align: left;
    padding: 6px;
    /* background-color: gray; */
`;

// will probably change it to look better
const DetailsButton = styled.button`

`;


export default StudentTable;