import React from "react";

const TodoItem = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">Learn Bootstrap</div>
        <div className="col-4">13-04-24</div>
        <div className="col-2">
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">Learn React</div>
        <div className="col-4">14-11-24</div>
        <div className="col-2">
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
