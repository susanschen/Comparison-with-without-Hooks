import React, { useState } from "react";
import "./styles.css";

/*
Todo Component : c(R)ud - Read data
*/
const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

/*
TodoForm Component : (C)rud - Create data
*/

// class TodoForm extends Component {
function TodoForm({ addTodo }) {
  // state = { value: "" };
  // updateValue = e => this.setState({ value: e.target.value });
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // if (!this.state.value) return;
    if (!value) return;
    // this.props.addTodo(this.state.value);
    addTodo(value);
    // this.setState({ value: "" });
    setValue("");
  };

  // render() {
  //  const { value } = this.state;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {/*
        onSubmit={this.handleSubmit}
        onChange={this.updateValue}
       */}
    </form>
  );
}

/*
App Component
*/
export default function App() {
  /*
  state = {
    todos: [ {text: "Learn", isCompleted: false}, {test:"practice", isCompleted: false}, .. ]
  }
  */
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Practice Spanish",
      isCompleted: false
    },
    {
      text: "Do 7-minute workout",
      isCompleted: false
    }
  ]);
  /* useState( )
    - hooks into the state or lifecycle of the component
    - returns an array wtih two values.
     1. a state, which is saved as todos.
     2. a function, which is saved as setTodos. We are going to use this to set the state.
    - We initialize the state by passing in an array to useState()
  */

  const addTodo = text => {
    /*
      Using spread ... operator to copy the array
      and then adding the new text value to the end of the array
    */
    // [...this.state.todos, { text }]
    const newTodos = [...todos, { text }];

    // this.setState({ todos: newTodos });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To Do</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        {/* addTodo={this.addTodo} */}
        <TodoForm addTodo={addTodo} />
      </div>
      <p>
        Tutorial from{" "}
        <a href="https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components">
          scotch.io
        </a>{" "}
      </p>
    </div>
  );
}
