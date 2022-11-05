const express = require("express");
const swaggerUi = require("swagger-ui-express");
const config = require("../config");

const bodyParser = require("body-parser");
const app = express();

const user = require("./components/user/network");
const swaggerDoc = require("./swagger.json");

//MIDDLEWARES
app.use(bodyParser.json());

//ROUTER
app.use("/api/user", user);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.app.port, () => {
  console.log("Listening on port ", config.app.port);
});
