// app.js

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) =>
  res.send(path.join(__dirname, "/frontend/public", "index.html"))
);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
