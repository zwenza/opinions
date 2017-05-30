const graphql = require('graphql');
const db = require('../../db');

const Tweet = require('./tweetSchema');

module.exports = {
    tweets: {
        type: new graphql.GraphQLList(Tweet),
        args: {
            id: {
                type: graphql.GraphQLInt
            },
            message: {
                type: graphql.GraphQLString
            }
        },
        resolve(root, args) {
            return db.models.tweet.findAll({where: args});
        }
    }
};