import { useState } from "react";
import "../App.css";

const AddTodo = (props) => {
  const [inputText, setInputText] = useState("");

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      props.addToList(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
