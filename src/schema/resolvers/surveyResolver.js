const api = require("../../config/http");

const getSurveys = async () => {
  try {
    const response = await api.get("survey");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar pesquisa:", error);
    throw error;
  }
};
const getSurveyById = async (_, args) => {
  try {
    try {
      const response = await api.get("survey");
      const data = response.data;
      const survey = data.find((item) => item.id.includes(args.id));
      return survey;
    } catch (error) {
      console.error("Erro ao buscar pesquisa:", error);
      throw error;
    }
  } catch (error) {
    console.error("Erro ao buscar pesquisa:", error);
    throw error;
  }
};

module.exports = {
  getSurveys,
  getSurveyById,
};
