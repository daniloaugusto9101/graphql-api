const { gql } = require("apollo-server");

const surveyQuery = gql`
  type Query {
    survey: [Survey!]!
  }
`;

module.exports = surveyQuery;
