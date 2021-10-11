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
    axios.post(db.dev + "/api/create-article", articleData);
  } else {
    axios.post(db.prod + "/api/create-article", articleData);
  }
};

export const getArticles = async () => {
  if (process.env.NODE_ENV === "development") {
    let data = [];
    await axios.get(db.dev + "/api/get-articles").then((body) => {
      data = body.data;
    });
    return data;
  } else {
    let data = [];
    await axios.get(db.prod + "/api/get-articles").then((body) => {
      data = body.data;
    });
    return data;
  }
};
