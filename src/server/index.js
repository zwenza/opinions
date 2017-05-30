const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const rootSchema = require('./rootSchema');

const app = express();
app.use(cors());

app.use('/api', expressGraphQL({
    schema: rootSchema,
    pretty: true,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('GraphQL API started!');
});