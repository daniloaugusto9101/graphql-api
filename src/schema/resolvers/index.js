const Surveys = require("./surveyResolver");

// Objeto de resolvers
const resolvers = {
  Query: {
    survey: Surveys.getSurveys,
    getSurveyById: Surveys.getSurveyById,
  },
};

module.exports = resolvers;
