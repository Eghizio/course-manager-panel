import React from "react";
import Header from "../components/organisms/Header";
import Main from "../components/atoms/Main";

export interface BrowseProps{

}

const Browse: React.FC<BrowseProps> = (props) => {
    return (
        <div>
            <Header>Browse</Header>
            <Main>
                Browse
            </Main>
        </div>
    );
};

export default Browse;