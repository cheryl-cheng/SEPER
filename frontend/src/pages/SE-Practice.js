import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

const SEPractice = () => {
  const createArticles = () => {
    var myObject = JSON.parse(articles);
    console.log(myObject);
  };

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown />
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
      <button onClick={() => createArticles()}>Create articles</button>
    </div>
  );
};

export default SEPractice;
