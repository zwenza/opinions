const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { schema } = require('./src/schema');

const app = express();

app.use(cors());
app.use('/api', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/api' }));

app.listen(4000, () => {
  console.log('GraphQL API started!');
});
