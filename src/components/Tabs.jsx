function getNumberOfCorrespondingTasks(todoList, tabType) {
  return tabType === "All"
    ? todoList.reduce((allTasksCounter) => allTasksCounter + 1, 0)
    : tabType === "Open"
    ? todoList.reduce(
        (openTasksCounter, todoItem) =>
          todoItem.complete === false ? openTasksCounter + 1 : openTasksCounter,
        0
      )
    : todoList.reduce(
        (completedTasksCounter, todoItem) =>
          todoItem.complete === true
            ? completedTasksCounter + 1
            : completedTasksCounter,
        0
      );
}

export default function Tabs({ todos, currentTab, setCurrentTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${tab === currentTab ? "tab-selected" : ""}`}
          onClick={() => setCurrentTab(tab)}
        >
          <h4>
            {tab} <span>({getNumberOfCorrespondingTasks(todos, tab)})</span>
          </h4>
        </button>
      ))}
      <hr />
    </nav>
  );
}
