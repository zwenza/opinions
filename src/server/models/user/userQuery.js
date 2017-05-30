const graphql = require('graphql');
const db = require('../../db');

const User = require('./userSchema');

module.exports = {
    users: {
        type: new graphql.GraphQLList(User),
        args: {
            id: {
                type: graphql.GraphQLInt
            },
            email: {
                type: graphql.GraphQLString
            }
        },
        resolve(root, args) {
            return db.models.user.findAll({where: args});
        }
    }
};