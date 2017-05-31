const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        tweets: [Tweet!]!
    }

    type Tweet {
        id: ID!
        message: String!
        user: User!
    }

    type Query {
        tweets(id: ID, message: String): [Tweet]
        users(id: ID, email: String): [User]
    }

    type Mutation {
        addPerson(firstName: String!, lastName: String!, email: String!): User
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };
