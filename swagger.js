const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/routes/burgerRoutes.js",
  "./src/routes/ingredients.routes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
