import React from "react";
import * as _ from "underscore";

const Todo = ({ todo, id, toggleTodo }) => (
  <li
    className={todo.completed ? "completed" : ""}
    onClick={() => toggleTodo(id)}
  >
    {todo.content}
  </li>
);

const TodoList = ({ todos, toggleTodo }) => {
  return _.keys(todos).map((id) => (
    <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
  ));
};

export default TodoList;
