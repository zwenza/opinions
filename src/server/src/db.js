const Sequelize = require('sequelize');
const Fake = require('faker');

const db = new Sequelize('postgres://florian@localhost:5432/graphql');

// Models
const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

const Tweet = db.define('tweet', {
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Relationships
User.hasMany(Tweet);
Tweet.belongsTo(User);

db.sync({
    force: true
}).then(() => {
    for (let i = 0; i < 10; i++) {
        User.create({
            firstName: Fake.name.firstName(),
            lastName: Fake.name.lastName(),
            email: Fake.internet.email()
        }).then(person => {
            person.createTweet({
                message: `hi my name is ${person.firstName}`
            });
        });
    }
});

module.exports = db;