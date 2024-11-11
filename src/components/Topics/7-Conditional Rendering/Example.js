import React from "react";

const Example = () => {
  let fruits = [];
 // let fruits = ["Apple", "Orange", "Mango", "Grapes"];
  return (
    <div className="container m-5 text-center">
      <h1>Fruits</h1>
      {fruits.length === 0 ? (<h1>Please add fruits into the fruits array </h1>) : (
    <ul className="list-group">
      {fruits.map((item, index) => (
        <li key={index} className="list-group-item border-dark">{item}</li>
      ))}
      </ul>)}
    </div>
  );
};

export default Example;