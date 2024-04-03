const { gql } = require("apollo-server");

const surveyQuery = gql`
  type Query {
    survey: [Survey!]!
    getSurveyById(id: String!): Survey!
    # delSurveyById(id: String!): Survey!
    # postSurvey(
    #   id: String!
    #   title: String!
    #   description: String
    #   createdAt: String!
    #   updatedAt: String
    #   expiresAt: String!
    #   options: [Option!]!
    # ): Survey!
  }
`;

module.exports = surveyQuery;
