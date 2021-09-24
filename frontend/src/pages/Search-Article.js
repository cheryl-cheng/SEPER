import React from "react";
import SearchForm from "../components/SearchForm.js";

const SearchArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to search for an article for existence in our SEPER repo.</p>
            <SearchForm/>

        </div>
    );
}
 
export default SearchArticle;
