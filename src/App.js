import React, { useState } from "react";
import "./styles.css";

/*
Todo Component
*/
const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

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

  return (
    <div className="app">
      <h1>To Do</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
