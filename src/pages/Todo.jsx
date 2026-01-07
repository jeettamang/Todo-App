import React, { useContext, useState } from "react";
import { CreateTodoContext } from "../contextApi/TodoContext";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const { state, dispatch } = useContext(CreateTodoContext);

  const addTodo = () => {
    console.log(state);
    if (title.length <= 0) {
      setTitleError("Input cannot be empty");
      return;
    }

    dispatch({
      type: "add",
      payload: {
        id: uuidv4(),
        title: title,
      },
    });

    setTitle("");
    setTitleError("");
  };

  return (
    <div className="bg-gray-50 m-auto mt-12">
      <h2 className="text-2xl text-center font-bold">Todo List</h2>
      <div className="bg-gray-200 w-125 p-6 rounded-lg space-y-5 m-auto">
        <div className="flex justify-around gap-2">
          <div className="flex justify-center items-center flex-col">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-82 p-1 border focus:outline-none rounded-lg"
              type="text"
              placeholder="Add your text ..."
            />{" "}
            {titleError.length > 0 && (
              <p className="text-sm italic text-red-500">{titleError}</p>
            )}
          </div>
          <button
            onClick={() => {
              addTodo();
            }}
            className="bg-green-500 w-22 rounded-lg cursor-pointer"
          >
            Add
          </button>{" "}
        </div>
        <div className="space-y-4">
          {state.todoItems.length > 0 ? (
            <>
              {state.todoItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex justify-between items-center p-3 rounded-lg"
                >
                  <span className="text-gray-800">{item.title}</span>
                  <div className="flex justify-center gap-2">
                    <button className="bg-green-500 rounded-lg w-20 p-1 text-white cursor-pointer">
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "delete",
                          payload: item.id,
                        })
                      }
                      className="bg-red-500 rounded-lg w-20 p-1 text-white cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center">No Todo Items found</div>
          )}
        </div>
        <button
          onClick={() => dispatch({ type: "deleteAll" })}
          className="flex justify-center items-center w-full bg-green-600 cursor-pointer text-white font-semibold p-2 rounded-2xl"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Todo;
