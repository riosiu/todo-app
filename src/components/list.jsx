import React from "react";
import { useState } from "react";
import Todo from "./todo";

function List({ todos, setTodos }) {
  return (
    <>
      <div className="w-96">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </div>
    </>
  );
}

export default List;
