import React, { useState, useEffect, useRef, useReducer } from 'react';

import useInput from '../hooks/useInput';
import useTimer from '../hooks/useTimer';

function todosReducer(todos, action) {
    switch (action.type) {
        case 'add':
            return [
                ...todos,
                action.payload,

            ];
        default:
            return todos;
        
    }
}

function TodoList() {
    //const time = useTimer();
    const todoInput = useInput();
    const [todos, dispatch] = useReducer(todosReducer, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'add',
            payload: todoInput.value
        });
        todoInput.cancel();
    }

    return (
        <>
            <h1>Todos</h1>
            {/* <p>current time:{time}</p> */}
            <form onSubmit={handleSubmit}>
            <input 
                value={todoInput.value} 
                onChange={todoInput.handleChange}
            />
            <button type="submit">Submit</button>
            <button type="button"onClick={todoInput.cancel}>Cancel</button>
            </form>
            <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul>
        </>
    )
}
export default TodoList;