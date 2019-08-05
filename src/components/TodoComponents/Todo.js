import React from "react";
import { Container } from 'semantic-ui-react';

const Todo = props => {
  return (
    <div
    onClick={() => props.toggleDone(props.id)}
    className={`todo${props.completed ? " completed" : ""}`}
    id={`${!props.task ? "hide" : ""}`}
    >
    <div className="todoItem">{props.task}</div>
    {/* <Divider /> */}
    </div>
  );
};

export default Todo;
