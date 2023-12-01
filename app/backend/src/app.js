// backend/app.js
const express = require("express");
require("express-async-errors");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.get("/", (_request, response) => {
	response.status(200).json({ message:"API no ar!" });
});

module.exports = app;
