const Sequelize = require("sequelize");
const Fake = require("faker");

const db = new Sequelize("postgres://postgres:root@localhost:5432/graphql");

// Models
const User = db.define("user", {
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
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Tweet = db.define("tweet", {
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relationships
User.hasMany(Tweet);
Tweet.belongsTo(User);

db
  .sync({
    force: true
  })
  .then(() => {
    User.create({
      firstName: "David",
      lastName: "Joech",
      email: "test@test.at",
      password: "test"
    });
  });

module.exports = db;
