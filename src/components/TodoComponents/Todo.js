import React from "react";
import { Segment, Divider } from 'semantic-ui-react';

const Todo = props => {
  return (
    <div 
    onClick={() => props.toggleDone(props.id)}
    className={`todo${props.completed ? " completed" : ""}`}
    >
    <div className="todoItem">{props.task}</div>
    {/* <Divider /> */}
    </div>
  );
};

export default Todo;
