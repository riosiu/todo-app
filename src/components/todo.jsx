import React from "react";
import { BsCheck } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

function Todo({ text, todos, todo, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((ev) => ev.id !== todo.id));
  };
  const doneHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="p-3 m-2 rounded-md flex flex-row  align-center mr-auto bg-gradient-to-br from-custom-bg_box_first via-custom-bg_box_second to-custom-bg_box_third font-bold text-base  gap-64">
      <h1
        className={`flex justify-start ${
          todo.completed
            ? "flex flex-col items-center line-through "
            : "flex flex-col items-center"
        }`}
      >
        {text}
      </h1>
      <div className="flex items-center flex-row">
        <button onClick={doneHandler} className="px-2" href="">
          <BsCheck />
        </button>
        <button onClick={deleteHandler} href="" className="px-2">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
