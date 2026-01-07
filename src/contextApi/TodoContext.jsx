import { createContext, useReducer } from "react";

export const CreateTodoContext = createContext();

const initialState = {
  todoItems: [],
};

const todoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add": {
      const isExists = state.todoItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExists) {
        return state;
      } else {
        let newTodoItem = [...state.todoItems, action.payload];

        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      return {
        todoItems: state.todoItems.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    }
    case "update": {
      return state;
    }
    case "deleteAll": {
      return state;
    }
    default: {
      return state;
    }
  }
};
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <CreateTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateTodoContext.Provider>
  );
};
