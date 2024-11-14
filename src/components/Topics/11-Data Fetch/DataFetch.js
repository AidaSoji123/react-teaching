import React, { useRef, useState } from "react";

const DataFetch = () => {
  const numberRef = useRef();
  const [fact, setFact] = useState();

  const getFact = async () => {
    const number = numberRef.current.value;
    const response = await fetch(`http://numbersapi.com/${number}`);
    const text = await response.text();
    setFact(text);
  };

  return (
    <div className="text-center m-5">
      <input ref={numberRef} type="number" placeholder="Enter number" />
      <button onClick={getFact}>Get Fact</button>
      <br />
      <h3>{fact}</h3>
    </div>
  );
};

export default DataFetch;
