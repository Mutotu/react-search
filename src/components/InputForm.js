import { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.seachTerm(input);

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          className="searchArtist"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="search-button"
          type="submit"
          onClick={() => {
            props.represhData();
          }}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
