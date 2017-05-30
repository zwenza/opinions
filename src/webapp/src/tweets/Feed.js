import React, {Component} from "react";
import {gql, graphql} from "react-apollo";
import styled from "styled-components";

import Tweet from "./Tweet";

const FeedContainer = styled.div`
    justify-content: center;
    align-self: center;
`;

const FeedQuery = gql`
    query { 
        tweets { 
            message,
            user {
                firstName
            }
        } 
    }
`;

const TweetList = ({data: {loading, tweets}}) => {
    return (
        <FeedContainer>{loading ? '' : tweets.map((tweet, id) => {
            return <Tweet key={id} tweet={tweet}/>
        })}</FeedContainer>
    )
};


export default graphql(FeedQuery)(TweetList);