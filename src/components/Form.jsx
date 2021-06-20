import React from 'react'

function Form({todos, setTodos, inputText, setInputText}) {
    function inputHandler(e) {
        setInputText(e.target.value);
    
    }
    function addTodo(e) {
        e.preventDefault();
        setTodos([...todos, {name:inputText, completed: false, id: Math.random() * 100}])
        setInputText('')

    }
    return (
        <form >
            <input type="text" value={inputText} onChange={inputHandler}/>
            <button onClick={addTodo}>ADD</button>
        </form>
    )
}

export default Form;
