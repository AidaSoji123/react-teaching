import React from "react";

const CounterV1 = () => {
  let count = 0;

  const increment = () => {
    count += 1;
    document.getElementById("count").innerHTML = `COUNT : ${count}`;
  };

  const decrement = () => {
    count -= 1;
    document.getElementById("count").innerHTML = `COUNT : ${count}`;
  };

  const reset = () => {
    count = 0;
    document.getElementById("count").innerHTML = `COUNT : ${count}`;
  };
  return (
    <div>
      <h1 id="count"> COUNT : {count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterV1;
