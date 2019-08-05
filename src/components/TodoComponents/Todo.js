import React from "react";

const Todo = props => {
  return (
    <div 
    onClick={() => props.toggleDone(props.id)}
    className={`todo${props.completed ? " completed" : ""}`}
    >
    <p>{props.task}</p>
    </div>
  );
};

export default Todo;
