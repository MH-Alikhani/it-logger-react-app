// import context and hooks
import { useState, useContext } from "react";
import itLoggerContext from "../../context/itLoggerContext";

// import CSS styles
import "./search.css";

const Search = () => {
  // use context
  const { searchLogs, getLogs } = useContext(itLoggerContext);

  // States
  const [searchValue, setSearchValue] = useState("");
  const [submitSearchValue, setSubmitSearchValue] = useState("");

  // submit handler
  const submitSearch = (e) => {
    e.preventDefault();

    if (searchValue !== "") {
      searchLogs(searchValue);
      setSubmitSearchValue(searchValue);
    }
  };

  // back to logs func
  const backToLogs = () => {
    getLogs();
    setSearchValue("");
    setSubmitSearchValue("");
  };

  return (
    <form className="search-wrapper" onSubmit={(e) => submitSearch(e)}>
      <button className="search-btn">
        <i className="fa fa-search"></i>
      </button>
      <input
        type="text"
        value={searchValue}
        className="search-input"
        placeholder="Search logs"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {submitSearchValue !== "" && (
        <button className="back-to-logs-btn" onClick={backToLogs}>
          <i class="fas fa-times"></i>
        </button>
      )}
    </form>
  );
};

export default Search;
