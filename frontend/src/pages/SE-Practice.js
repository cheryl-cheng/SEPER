import React, { useEffect, useState } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import { getArticles } from "../api/Article.js";

const SEPractice = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticles().then((newArticles) => {
      setArticles(newArticles);
    });
  }, []);

  if (!articles) {
    return <p>Loading...</p>;
  } else {
    console.log(articles);
  }

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};

export default SEPractice;
