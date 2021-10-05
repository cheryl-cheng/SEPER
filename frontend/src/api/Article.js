import axios from "axios";
import db from "../env.json";
require("dotenv").config();

export const submitArticleSuggestion = (articleData) => {
  if (process.env.NODE_ENV === "development") {
    axios.post(db.dev + "/api/submit-suggestion", articleData);
  } else {
    axios.post(db.prod + "/api/submit-suggestion", articleData);
  }
};

export const createArticle = (articleData) => {
  if (process.env.NODE_ENV === "development") {
    axios.post(db.dev + "/api/create-artcle", articleData);
  } else {
    axios.post(db.prod + "/api/create-artcle", articleData);
  }
};
