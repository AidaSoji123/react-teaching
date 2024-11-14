import React from 'react';
import useCount from './hooks/useCount';

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
