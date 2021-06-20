import React from "react";

function Form({ textInput, setTextInput, todos, setTodos }) {
  function textHandler(e) {
    setTextInput(e.target.value);
  }
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, { name: textInput, id: Math.random() * 100 }]);
  }
  return (
    <form>
      <input type="text" onChange={textHandler} />
      <button onClick={addTodo}>ADD</button>
    </form>
  );
}

export default Form;
