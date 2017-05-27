import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { injectGlobal } from "styled-components";

import registerServiceWorker from './registerServiceWorker';
import App from './App';

import {theme, globals} from "./styles/Theme";

injectGlobal`${globals}`; // eslint-disable-line

const networkInterface = createNetworkInterface({uri: 'http://localhost:4000/api'});
const client = new ApolloClient({networkInterface: networkInterface});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
