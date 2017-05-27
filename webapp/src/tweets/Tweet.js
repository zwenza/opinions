import React from 'react';
import styled from "styled-components";

import { Text } from "../styles/Typography";

const TweetContainer = styled.div`
    margin-top: 5px;
    padding: 10px;
    width: 50vh;    //TODO remove this hack
    background-color: white;
    border-radius: 5px;
`;

export default ({tweet}) => {
    return (
        <TweetContainer><Text>{tweet.user.firstName} posted: "{tweet.message}"</Text></TweetContainer>
    )
};