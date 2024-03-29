const api = require("../../config/http");

const surveyResolver = async () => {
  try {
    const response = await api.get("survey");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar pesquisa:", error);
    throw error;
  }
};

module.exports = surveyResolver;
