const graphql = require('graphql');
const db = require('../../db');

const User = require('./userSchema');

module.exports = {
    addPerson: {
        type: User,
        args: {
            firstName: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            lastName: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            email: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
        },
        resolve(root, args) {
            return db.models.user.create({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email.toLowerCase()
            })
        }
    }
};