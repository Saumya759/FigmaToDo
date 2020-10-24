import { ADD_TODO, DELETE_TODO,TOGGLE_TODO} from "./constant";

const initialTodoState = {
  isLoading: false,
  isSucess: false,
  isError: false,
  data: [],
};

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const tododata = [];
      console.log("FFFFFFFFFFFFF");
      tododata.push(
        { id: Math.random(), title: action.payload.content.value },
        ...state.data
      );
      return {
        data: tododata,
      };
    }


    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }

    default: {
      return state;
    }
  }
};
