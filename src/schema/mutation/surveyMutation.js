const { gql } = require("apollo-server");

const surveyMutation = gql`
    type Mutation {
        createSurvey(
            title: String!
            description: String!
            expiresAt: String!
            options: [OptionInput]!
        ): Survey
        updateSurveyById(
            id: String!
            title: String!
            description: String!
            expiresAt: String!
            options: [OptionInput]!
        ): Survey
        deleteSurveyById(id: String!): String
    }
`;

module.exports = surveyMutation;