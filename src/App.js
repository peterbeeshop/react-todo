import React, { useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Peter's Todo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
