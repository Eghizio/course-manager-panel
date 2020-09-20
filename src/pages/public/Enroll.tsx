import React, { useState } from "react";
// import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";
import Center from "../../components/atoms/Center";
import EnrollmentForm from "../../components/organisms/EnrollmentForm";
import { EnrollData } from "../../types/student";
import EnrollmentSummary from "../../components/molecules/EnrollmentSummary";

export interface EnrollProps{

}

const Enroll: React.FC<EnrollProps> = (props) => {
    const [enrolledStudent, setEnrolledStudent] = useState<null | EnrollData>(null); // will probably be elevated to context

    return (
        <div>
            <Header>Enroll</Header>
            <Main>
                <h2>Enroll</h2>
                <Center>
                    {enrolledStudent
                    ?   (enrolledStudent && <EnrollmentSummary {...enrolledStudent}/>)
                    :   <EnrollmentForm enrollStudent={setEnrolledStudent}/>
                    }
                </Center>
            </Main>
        </div>
    );
};

export default Enroll;