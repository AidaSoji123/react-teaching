import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
        <div className="col-10 w-75">  <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a todo"
            className="w-100 form control"
          /></div>
          <div className="col-2"><button type="submit">Add Todo</button></div>
        </div>
      </div>
    </form>
  );
}

export default TodoInput;
