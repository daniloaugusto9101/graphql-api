const { gql } = require("apollo-server");
// const surveyType = require("./survey");
// const optionType = require("./option");

const typeDefs = gql`
  type Survey {
    id: String!
    title: String!
    description: String
    createdAt: String!
    updatedAt: String
    expiresAt: String!
    options: [Option!]!
  }
  type Option {
    id: String
    title: String!
    votes: String!
  }
`;

module.exports = typeDefs;
