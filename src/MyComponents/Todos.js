import React from 'react'
import {TodoItem} from './TodoItem';
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className = "text-center my-3">Todos List</h3>

            { props.todos.length === 0 ? "NO TODOS TO DISPLAY":
            props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key={todo.srno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
