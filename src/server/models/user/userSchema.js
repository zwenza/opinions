const graphql = require('graphql');

const userFields = {
    id: {
        type: graphql.GraphQLInt,
        resolve(user) {
            return user.id
        }
    },
    firstName: {
        type: graphql.GraphQLString,
        resolve(user) {
            return user.firstName
        }
    },
    lastName: {
        type: graphql.GraphQLString,
        resolve(user) {
            return user.lastName
        }
    },
    email: {
        type: graphql.GraphQLString,
        resolve(user) {
            return user.email
        }
    }
};

module.exports = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'A user.',
    fields: userFields
});