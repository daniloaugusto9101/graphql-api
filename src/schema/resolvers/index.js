const surveyResolver = require("./surveyResolver");

// Objeto de resolvers
const resolvers = {
  Query: {
    survey: surveyResolver,
  },
};

module.exports = resolvers;
