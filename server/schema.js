const graphql = require('graphql');
const db = require('./db');

const User = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'A simple user.',
    fields: () => {
        return {
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
            },
            tweets: {
                type: new graphql.GraphQLList(Tweet),
                resolve(user) {
                    return user.getTweets();
                }
            }
        }
    }
});

const Tweet = new graphql.GraphQLObjectType({
    name: 'Tweet',
    description: 'A useless piece of opinion posted on the web',
    fields: () => {
        return {
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
        }
    }
});

const Mutation = new graphql.GraphQLObjectType({
    name: 'Mutation',
    description: 'Functions to create some stuff.',
    fields: () => {
        return {
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
        }
    }
});

const Query = new graphql.GraphQLObjectType({
    name: 'Query',
    description: 'This is our root query',
    fields: () => {
        return {
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
            },
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
        }
    }
});

const Schema = new graphql.GraphQLSchema({
    query: Query,
    mutation: Mutation
});

module.exports = Schema;