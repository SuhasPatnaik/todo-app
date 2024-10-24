import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [todoInput, setTodoInput] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (!todoInput) {
            return;
          }
          handleAddTodo(todoInput);
          setTodoInput("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
