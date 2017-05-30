const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const appSchema = require('./schema');

const app = express();
app.use(cors());

app.use('/api', expressGraphQL({
    schema: appSchema,
    pretty: true,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('GraphQL API started!');
});