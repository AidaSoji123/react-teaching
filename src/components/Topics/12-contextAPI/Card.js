import React from "react";
import useCount from "./hooks/useCount";

const Card = () => {
    const { count, setCount } =useCount();
  return <div>
    <h1>My Card</h1>
    <hr/>
    <p>Current Count is : {count}</p>
    <button onClick={()=>setCount(count-1)}>-</button>
  </div>;
};

export default Card;
