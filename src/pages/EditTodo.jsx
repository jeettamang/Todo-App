import { useContext, useState } from "react";
import { CreateTodoContext } from "../contextApi/TodoContext";
import { useLocation, useNavigate } from "react-router-dom";

const EditTodo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [titleError, setTitleError] = useState("");
  const { dispatch } = useContext(CreateTodoContext);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center gap-12 bg-gray-200 mt-20 p-6 rounded-2xl">
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
            dispatch({
              type: "update",
              payload: {
                id: state.id,
                title: title,
              },
            });

            navigate("/todo");
          }}
          className="bg-green-500 w-22 rounded-lg cursor-pointer"
        >
          Edit
        </button>{" "}
      </div>
    </div>
  );
};

export default EditTodo;
