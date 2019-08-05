import React from "react";

const Todo = props => {
  return (
    <>
      <br />
      <input type="checkbox" name="completed" value={props.task} />
      {props.task}
      <br />
    </>
  );
};

export default Todo;
