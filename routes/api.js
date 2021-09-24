const express = require("express");
const router = express.Router();
const SuggestedArticle = require("../models/SuggestedArticle");

router.post("/submit-suggestion", (req, res, next) => {
  SuggestedArticle.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
