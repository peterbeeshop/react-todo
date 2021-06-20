//todo app in react

// todo app in reat
import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Form from './Form';

function Todo() {
    const [todo, setTodo] = useState([]);
    const [textInput, setTextInput] = useState('')
    return (
        <div>
            <Form textInput={textInput} setTextInput={setTextInput} setTodos={setTodo} todos={todo}/>
        </div>
    )
}

export default Todo

const [todo, setTodo] = useState([]);
const [textInput, setTextInput] = useState('')