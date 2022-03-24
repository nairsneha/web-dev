import React from "react";
import TodoList from "./TodoList.js";

alert('Hello World!');

('#wd-todo').append(
    <div className="container">
        <h1>Todo example</h1>
        {TodoList()}
    </div>
);

