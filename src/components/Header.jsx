export default function Header({ todos }) {
  const numOfOpenTasks = todos.reduce(
    (openTasksCounter, todo) =>
      todo.complete === false ? openTasksCounter + 1 : openTasksCounter,
    0
  );

  const isTaskSingular = numOfOpenTasks === 1;

  return (
    <header>
      <h1 className="text-gradient">
        You have {numOfOpenTasks} {isTaskSingular ? "task" : "tasks"} open.
      </h1>
    </header>
  );
}
