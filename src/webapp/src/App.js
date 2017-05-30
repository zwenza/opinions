import React, {Component} from "react";
import { Title, Meta } from "./styles/Typography";

import styled from "styled-components";

import Feed from "./tweets/Feed";
import Copyright from "./various/Copyright";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

class App extends Component {
    render() {
        return (
            <AppContainer>
                <Title>Opinions</Title>
                <Meta>A TWITTER CLONE</Meta>
                <br/>
                <Feed/>
                <Copyright/>
            </AppContainer>
        );
    }
}

export default App;
