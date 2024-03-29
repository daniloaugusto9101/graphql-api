const { gql } = require("apollo-server");

const surveyQuery = gql`
  type Query {
    survey: [Survey!]!
    getSurveyByTitle(title: String!): Survey!
  }
`;

module.exports = surveyQuery;
