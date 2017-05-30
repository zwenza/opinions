const graphql = require('graphql');

const rootQuery = require('./rootQuery');
const rootMutation = require('./rootMutation');

module.exports = new graphql.GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
});