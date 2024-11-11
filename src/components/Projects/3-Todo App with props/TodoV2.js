import React from "react";
import TodoItem2 from "./TodoItem2";

const TodoV2 = () => {
  const todos = [
    { id: 1, title: "Learn React", date: "19-04-24" },
    { id: 2, title: "Build a Todo App", date: "11-09-24" },
    { id: 3, title: "Master Props and State", date: "01-07-24" }
  ];

  return (
    <div className="container m-5">
      <h1 className="text-center bg-dark text-light p-2">Todo App</h1>
      {/* Pass the todos array as props */}
      <TodoItem2 todos={todos} />
    </div>
  );
};

export default TodoV2;
