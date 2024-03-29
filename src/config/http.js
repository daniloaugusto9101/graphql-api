const axios = require("axios");

// import { env } from "./env"
// const defaultEnv = "production"

const api = axios.create({
  //baseURL: "https://assem.com.br/wp-json/wp/v2/",
  baseURL: "https://us-central1-serveless-survey-api.cloudfunctions.net/api/",
  //   headers: {
  //     Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`,
  //   },
});

module.exports = api;
