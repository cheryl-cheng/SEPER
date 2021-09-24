import axios from "axios";
import db from "../env.json";

export const submitArticleSuggestion = (articleData) => {
  axios.post(db.dev + "/api/submit-suggestion", articleData);
};
