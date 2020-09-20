import React from "react";
import { courses, students } from "../utils/dummyData";


const dummyData = {
    courses,
    students
};

export const DummyDataContext = React.createContext(dummyData);

// will be split to public data provider and private one
const DummyDataProvider: React.FC = ({ children }) => {
    //temp, will be fetching from firestore

    return (
        <DummyDataContext.Provider value={dummyData}>
            {children}
        </DummyDataContext.Provider>
    );
};

export default DummyDataProvider;