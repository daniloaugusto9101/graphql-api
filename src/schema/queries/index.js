const { gql } = require("apollo-server");
const surveyQuery = require("./surveyQuery");
const optionQuery = require("./optionQuery");

const allQuerys = gql`
  ${surveyQuery}
  ${optionQuery}
`;

module.exports = allQuerys;
