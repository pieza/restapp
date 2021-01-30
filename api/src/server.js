const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");

module.exports = app;
