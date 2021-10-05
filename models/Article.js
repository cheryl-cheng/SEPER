const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  authors: String,
  source: String,
  pubyear: Number,
  volume: String,
  numpages: Number,
  claim: String,
  evidence: String,
  doi: String,
  practice: String,
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
