import React, { useEffect } from "react";
import Todo from "./Todo";
import { Container } from 'semantic-ui-react';

// This will be a functional component

const TodoList = props => {
  return (
    <Container>
      {props.todos.map(todo => (
        <Todo task={todo.task} id={todo.id} completed={todo.completed} key={todo.id} toggleDone={props.toggleDone}/>
      ))}
    </Container>
  );
};

export default TodoList;
