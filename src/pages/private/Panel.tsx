import React from "react";
// import styled from "styled-components";
// import { auth } from "../../firebase";
import Header from "../../components/organisms/Header";
import Main from "../../components/atoms/Main";
import StudentTable from "../../components/molecules/StudentTable";
import { DummyDataContext } from "../../providers/DummyDataProvider";


export interface PanelProps{

}

const Panel: React.FC<PanelProps> = (props) => {
    const { students } = React.useContext(DummyDataContext);
    
    return (
        <div>
            <Header>Panel</Header>
            <Main>
                <h2>Panel</h2>
                <StudentTable students={students}/>
            </Main>
        </div>
    );
};

export default Panel;