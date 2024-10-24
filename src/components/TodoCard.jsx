export default function TodoCard({ todoItem }) {
  return (
    <div className="card todo-item">
      <p>{todoItem.input}</p>
      <div className="todo-buttons">
        <button disabled={todoItem.complete}>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
