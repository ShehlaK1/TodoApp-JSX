import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  let addToList = (inputText) => {
    setTodoList([...todoList, inputText]);
  };

  const deleteTodo = (key) => {
    let tempList = [...todoList];
    tempList.splice(key, 1);
    setTodoList(tempList);
  };
 
  return (
    <>
    <div className="todo-app">
      <AddTodo addToList={addToList} />
      <DisplayTodos todoList={todoList} deleteTodo={deleteTodo} />
    </div>
    </>
  );
}

export default App;
