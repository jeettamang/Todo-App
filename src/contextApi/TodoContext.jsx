import {createContext, useEffect, useReducer } from "react";
import { Bounce, toast } from "react-toastify";

export const CreateTodoContext = createContext();

const getTodo = () => {
  let todos = localStorage.getItem("todoItems");
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todoItems: getTodo(),
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

        toast.success("Todo is added!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      return {
        todoItems: state.todoItems.filter((item) => item.id !== action.payload),
      };
    }
    case "deleteAll": {
      return {
        todoItems: [],
      };
    }

    case "update": {
      return state;
    }
    default: {
      return state;
    }
  }
};
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(state.todoItems));
  });

  return (
    <CreateTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateTodoContext.Provider>
  );
};
