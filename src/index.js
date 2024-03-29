const { ApolloServer, gql } = require("apollo-server");
// const fetch = require("node-fetch");

const allTypes = require("./schema/types"); //importação de todos os types
const allQuerys = require("./schema/queries"); //importação de todas aas querys
// const surveyResolver = require("./schema/resolvers/surveyResolver"); //importação de todas aas resolvers

// Defina o schema GraphQL
const typeDefs = gql`
  ${allTypes}
  ${allQuerys}
`;

// Defina os resolvers
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

// Criar instância do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar o servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor pronto em ${url}`);
});
