import React from "react";

const TodoItem2 = ({ todos }) => {
  return (
    <div className="container text-center">
      {todos.map((todo, id) => (
        <div className="row bg-success p-2 border border-light" key={id}>
          <div className="col-6">{todo.title}</div>
          <div className="col-4">{todo.date}</div>
          <div className="col-2">
            <button className="btn btn-danger mb-3">DELETE</button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default TodoItem2;
