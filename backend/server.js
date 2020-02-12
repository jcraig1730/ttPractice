const express = require("express");
const cors = require("cors");
const path = require("path");

const api = require("./api");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

module.exports = app;
