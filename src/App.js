import React from "react";
import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
};

export default App;
