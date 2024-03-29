const app = require("./app");

// Inicia o servidor
app.listen().then(({ url }) => {
  console.log(`🚀 Server running on: ${url}`);
});
