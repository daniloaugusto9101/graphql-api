const Surveys = require("./surveyResolver");
const api = require("../../config/http");

// const get = async (_, args) => {
//   try {
//     const response = await api.get("survey");
//     const data = response.data;
//     const survey = data.find((item) => item.title.includes(args.title));
//     return survey;
//   } catch (error) {
//     console.error("Erro ao buscar pesquisa:", error);
//     throw error;
//   }
// };

// Objeto de resolvers
const resolvers = {
  Query: {
    survey: Surveys.getSurveys,
    getSurveyByTitle: Surveys.getSurveyByTitle,
    // getSurveyByTitle: async (_, args) => {
    //   try {
    //     const response = await api.get("survey");
    //     const data = response.data;
    //     const survey = data.find((item) => item.title.includes(args.title));
    //     console.log(args.title);
    //     return survey;
    //   } catch (error) {
    //     console.error("Erro ao buscar pesquisa:", error);
    //     throw error;
    //   }
    // },
  },
};

module.exports = resolvers;
