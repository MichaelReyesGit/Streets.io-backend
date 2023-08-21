const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const fightersController = require("./controllers/fightersController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/fighters", fightersController);

app.get("/", (req, res) => {
  res.send("Its time to hit the streets!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
