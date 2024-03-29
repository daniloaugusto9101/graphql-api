const fetch = require("node-fetch");

// Objeto de resolvers
const resolvers = {
  Query: {
    survey: async () => {
      try {
        const response = await fetch(
          "https://us-central1-serveless-survey-api.cloudfunctions.net/api/survey"
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Erro ao buscar pesquisa:", error);
        throw error;
      }
    },
  },
};

module.exports = resolvers;
