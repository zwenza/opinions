const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("node-env-file");

const { schema } = require("./src/schema");
const { secureEndpointMiddleware, getToken } = require("./src/auth");
const db = require("./src/db");

env(__dirname + "/.env");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.post("/login", (req, res) => {
  db.models.user
    .findOne({
      attributes: ["id"],
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(user => {
      res.send({
        token: getToken(user.id)
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(403);
    });
});
app.use("/api", secureEndpointMiddleware, graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/api" }));

app.listen(4000, () => {
  console.log("GraphQL API started!");
});
