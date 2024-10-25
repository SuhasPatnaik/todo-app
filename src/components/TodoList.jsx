import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  currentTab,
  handleDeleteTodo,
  handleDoneTodo,
}) {
  const filteredTodoList =
    currentTab === "All"
      ? todos
      : currentTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <>
      {filteredTodoList.map((todo, index) => (
        <TodoCard
          key={todo.id}
          index={index}
          todoItem={todo}
          handleDoneTodo={handleDoneTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </>
  );
}
