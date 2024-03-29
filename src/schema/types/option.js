const { gql } = require("apollo-server");

// Defina o schema GraphQL
const typeDefs = gql`
  type Option {
    id: String
    title: String!
    votes: String!
  }
`;
