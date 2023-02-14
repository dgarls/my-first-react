import React from 'react';
import './App.css';

const todoItems = ['Swag', 'Bentley', 'CSGO']

function printTodoList(items){
    return items.map((item) => <h2>{item}</h2>)
}

function App(){
    return (
        <>
            <h1>
                Hello World!
            </h1>
            <div>
                These are my todos:
                {printTodoList(todoItems)}
            </div>
        </>
    )
}

export default App