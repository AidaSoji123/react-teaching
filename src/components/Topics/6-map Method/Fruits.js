import React from "react";

const Fruits = () => {
  let fruits = ["Apple", "Orange", "Mango", "Grapes"];
  return (
    <div className="container m-5 text-center">
      <h1>Fruits</h1>
    <ul className="list-group">
      {fruits.map((item, index) => (
        <li key={index} className="list-group-item border-dark">{item}</li>
      ))}
      </ul>
    </div>
  );
};

export default Fruits;
