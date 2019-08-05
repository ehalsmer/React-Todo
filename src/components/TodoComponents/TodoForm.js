import React from "react";

// build this component as a class so that it can manage its own state

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //   console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // insert function from app.js passed in through props which updates state in app.js
    this.props.addTodo(this.state.todo);
    // and reset state of form input to empty string
    this.setState({
        todo: ""
    })
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            name="todo"
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
        <button onClick={this.props.clearAll}>Clear All</button>
      </>
    );
  }
}

export default TodoForm;
