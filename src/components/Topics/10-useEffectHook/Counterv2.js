import React, { useEffect, useState } from "react";

const Counterv2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Current count is: ${count}`);
  }, [count]); // This will run every time `count` changes

  return (
    <div>
      <h1>COUNTER APP</h1>
      <h1>COUNT : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="p-3 m-3 btn btn-success">
        +
      </button>

      <button onClick={() => setCount(0)} className="p-3 m-3 btn btn-primary">
        c
      </button>

      <button onClick={() => setCount(count - 1)} className="p-3 m-3 btn btn-danger">
        -
      </button>
    </div>
  );
};

export default Counterv2;
