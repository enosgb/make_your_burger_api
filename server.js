const app = require("./src/app.js");
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
require("express-async-errors");
require("reflect-metadata");

const port = process.env.PORT || 3000;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(port, () => {
  console.log(`api listening in http://localhost:${port}`);
});
