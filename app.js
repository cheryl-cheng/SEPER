const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api", routes);

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
