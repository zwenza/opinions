const graphql = require('graphql');

const tweetQuery = require('../models/tweet/tweetQuery');
const userQuery = require('../models/user/userQuery');

const combinedQueries = Object.assign(tweetQuery, userQuery);

module.exports = new graphql.GraphQLObjectType({
    name: 'Query',
    description: 'This is our root query',
    fields: () => combinedQueries
});