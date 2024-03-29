const axios = require("axios");

// import { env } from "./env"
// const defaultEnv = "production"

const api = axios.create({
  //baseURL: "https://assem.com.br/wp-json/wp/v2/",
  baseURL: "https://us-central1-serveless-survey-api.cloudfunctions.net/api/",
  // headers: {
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNzExNzQyMTczLCJleHAiOjE3MTE3NDU3NzN9.8VsZhtp-MNqJeTaGT0sLXykLtPpWRSZbqiMfQat-X9c`,
  // },
});

module.exports = api;
