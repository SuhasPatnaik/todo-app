export default function TodoCard({
  index,
  todoItem,
  handleDoneTodo,
  handleDeleteTodo,
}) {
  return (
    <div className="card todo-item">
      <p>{todoItem.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todoItem.complete}
          onClick={() => handleDoneTodo(index)}
        >
          Done
        </button>
        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}
