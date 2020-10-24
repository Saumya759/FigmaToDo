import { ADD_TODO, DELETE_TODO,TOGGLE_TODO } from "./constant";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});


export const toggleTodo = (id) => (
  {
      type: TOGGLE_TODO,
      payload: {
          id
      }
  }
)

