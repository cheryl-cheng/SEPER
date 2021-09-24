const mongoose = require("mongoose");
const { Schema } = mongoose;

const suggestedArticleSchema = new Schema({
  title: String,
  authors: String,
  source: String,
  pubyear: Number,
  volume: String,
  numpages: Number,
  doi: String,
  sepractice: String,
  meta: {
    date: { type: Date, default: Date.now },
  },
});

const SuggestedArticle = mongoose.model(
  "suggestedArticle",
  suggestedArticleSchema
);

module.exports = SuggestedArticle;
