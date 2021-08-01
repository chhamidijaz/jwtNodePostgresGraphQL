const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    role: String!
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      role: String!
    ): String!
    login(email: String!, password: String!): String!
    updateUser(id: String, name: String): String!
    deleteUser(id: String): String!
  }
`;

module.exports = typeDefs;
