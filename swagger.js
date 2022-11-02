const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/routes/burger.routes.js",
  "./src/routes/ingredients.routes.js",
  "./src/routes/status.routes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
