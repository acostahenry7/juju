const express = require("express");

const config = require("../config");

const bodyParser = require("body-parser");
const app = express();

const user = require("./components/user/network");

//MIDDLEWARES
app.use(bodyParser.json());

//ROUTER
app.use("/api/user", user);

app.listen(config.app.port, () => {
  console.log("Listening on port ", config.app.port);
});
