import React from "react";
import Todo from "./Todo";

// This will be a functional component

const TodoList = props => {
  return (
    <>
      {props.todos.map(todo => (
        <Todo task={todo.task}/>
      ))}
    </>
  );
};

export default TodoList;
