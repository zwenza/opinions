# Opinions

Some sort of twitter clone to learn GraphQL 📚

## i am using...

* GraphQL - [github.com/graphql/graphql-js](https://github.com/graphql/graphql-js)
* Express - [github.com/expressjs/express](https://github.com/expressjs/express)
* Sequelize - [github.com/sequelize/sequelize](https://github.com/sequelize/sequelize)
* React - [github.com/facebook/react](https://github.com/facebook/react)
* React Apollo - [github.com/apollographql/react-apollo](https://github.com/apollographql/react-apollo)
* Styled Components - [github.com/styled-components/styled-components](https://github.com/styled-components/styled-components)
* JWT - [github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## getting started

### server

To run the GraphQL server run `yarn install` in `/src/server` and make sure to update the database-config in the `db.js` 
to your database. The server will automatically generate some data to query.

Start the server with `yarn start` inside the `/src/server` folder.

You can connect to GraphiQL UI on `localhost:4000/graphql`

### webapp

To run the React webapp run `yarn install` and `yarn start` in `/src/webapp`.