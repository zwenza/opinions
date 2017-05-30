const graphql = require('graphql');

const userMutation = require('../models/user/userMutation');

const combinedMutations = Object.assign({}, userMutation);

module.exports = new graphql.GraphQLObjectType({
    name: 'Mutations',
    description: 'Here to create things',
    fields: () => combinedMutations
});