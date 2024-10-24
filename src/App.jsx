import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  /* const todos = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Get the groceries!", complete: false },
    { input: "Learn how to web design", complete: false },
    { input: "Say hi to gran gran", complete: true },
    { input: "Go to gym", complete: false },
  ]; */
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [currentTab, setCurrentTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodosList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodosList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} currentTab={currentTab} />
    </>
  );
}

export default App;
