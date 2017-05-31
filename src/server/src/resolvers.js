const db = require('./db');

module.exports = {
  Query: {
    users: (_, args) => db.models.user.findAll({ where: args }),
    tweets: (_, args) => db.models.tweet.findAll({ where: args })
  },
  User: {
    tweets: user => user.getTweets()
  },
  Tweet: {
    user: tweet => tweet.getUser()
  },
  Mutation: {
    addPerson: (root, { firstName, lastName, email }) =>
      db.models.user.create({
        firstName,
        lastName,
        email: email.toLowerCase()
      })
  }
};
