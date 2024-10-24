import TodoCard from "./TodoCard";

export default function TodoList({ todos, currentTab }) {
  const filteredTodoList =
    currentTab === "All"
      ? todos
      : currentTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filteredTodoList.map((todo, index) => (
        <TodoCard key={index} todoItem={todo} />
      ))}
    </>
  );
}
