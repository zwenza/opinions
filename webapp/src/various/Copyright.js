import React from 'react';
import styled from "styled-components";

import { Meta } from "../styles/Typography";

const CopyrightContainer = styled.div`
    position: absolute;
    bottom: 5px;
`;

export default () => {
    return (
        <CopyrightContainer><Meta>MADE BY DAVID JÖCH</Meta></CopyrightContainer>
    )
};