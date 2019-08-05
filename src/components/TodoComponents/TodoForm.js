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
      })
    //   console.log(this.state);
  }

  handleSubmit = e => {
      e.preventDefault();
      // insert function from app.js passed in through props which updates state in app.js
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input          
          type="text" 
          value={this.state.todo}
          name="todo" 
          onChange={this.handleChanges}>
        </input>
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
