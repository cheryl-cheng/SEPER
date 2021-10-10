const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const SuggestedArticle = require("../models/SuggestedArticle");

router.post("/submit-suggestion", (req, res, next) => {
  SuggestedArticle.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/get-articles", (req, res, next) => {
  Article.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/create-article", (req, res, next) => {
  Article.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
