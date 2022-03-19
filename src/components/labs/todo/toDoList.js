import React from "react";

import TodoItem from "./toDoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

