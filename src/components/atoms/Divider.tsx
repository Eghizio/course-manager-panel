import React from "react";
import styled from "styled-components";


const Divider: React.FC = ({ children }) => {
    return (
        <StyledDivider>
            <Line/>
                {children && <Text>{children}</Text>}
            <Line/>
        </StyledDivider>
    );
};

const StyledDivider = styled.div`
    width: 98%;
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: gray;
`;

const Text = styled.span`
    font-size: small;
    padding: 0 5px;
`;

export default Divider;