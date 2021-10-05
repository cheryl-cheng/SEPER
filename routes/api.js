const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const SuggestedArticle = require("../models/SuggestedArticle");

router.post("/submit-suggestion", (req, res, next) => {
  SuggestedArticle.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

// router.get("/get-articles");

router.post("/create-artcle", (req, res, next) => {
  Article.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
