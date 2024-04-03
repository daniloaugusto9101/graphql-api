const { ApolloServer, gql } = require("apollo-server");
// const fetch = require("node-fetch");

const allTypes = require("./schema/types"); //importação de todos os types
const allQuerys = require("./schema/queries"); //importação de todas aas querys
const allMutation = require("./schema/mutation/surveyMutation.js"); //importação de todas aas mutations
const resolvers = require("./schema/resolvers"); //importação de todas os resolvers

// Defina o schema GraphQL
const typeDefs = gql`
  ${allTypes}
  ${allQuerys}
  ${allMutation}
`;

// Criar instância do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar o servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor pronto em ${url}`);
});
