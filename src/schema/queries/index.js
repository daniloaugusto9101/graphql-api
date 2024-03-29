const { gql } = require("apollo-server");

const allQuerys = gql`
  type Query {
    survey: [Survey!]!
  }
`;

module.exports = allQuerys;
