import { useState } from "react";
import ErMessage from "./ErMessage";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.seachTerm(input);
    setShowError(input.length < 1);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search...'
          className='searchArtist'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className='search-button'
          type='submit'
          onClick={() => {
            props.represhData();
          }}
        >
          <i className='fa fa-search'></i>
        </button>
      </form>
      {showError ? <ErMessage /> : null}
    </div>
  );
};

export default Form;
