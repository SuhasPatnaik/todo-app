import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [
      ...todos,
      { id: Date.now(), input: newTodo, complete: false },
    ];
    setTodos(newTodoList);
    saveToLocalStorage(newTodoList);
  }

  function handleDoneTodo(todoItemIndex) {
    let newTodoList = [...todos];
    let completedTodo = { ...todos[todoItemIndex], complete: true };
    newTodoList[todoItemIndex] = completedTodo;
    setTodos(newTodoList);
    saveToLocalStorage(newTodoList);
  }

  function handleDeleteTodo(todoItemIndex) {
    const newTodoList = todos.filter((todo, index) => index !== todoItemIndex);
    setTodos(newTodoList);
    saveToLocalStorage(newTodoList);
  }

  function saveToLocalStorage(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        currentTab={currentTab}
        handleDoneTodo={handleDoneTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
