const graphql = require('graphql');

const User = require('../user/userSchema');

const tweetFields = {
    id: {
        type: graphql.GraphQLInt,
        resolve(tweet) {
            return tweet.id
        }
    },
    message: {
        type: graphql.GraphQLString,
        resolve(tweet) {
            return tweet.message
        }
    },
    user: {
        type: User,
        resolve(tweet) {
            return tweet.getUser()
        }
    }
};

module.exports = new graphql.GraphQLObjectType({
    name: 'Tweet',
    description: 'A useless piece of opinion posted on the web',
    fields: tweetFields
});