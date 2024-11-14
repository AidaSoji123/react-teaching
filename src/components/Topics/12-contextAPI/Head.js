import React from "react";
import Counter from "./Counter";
import Card from "./Card";
import CountProvider from "./providers/CountProvider";

const Head = () => {
  return (
    <div className="text-center m-5">
      <CountProvider>
        <Counter />
        <Card />
        <Card />
        <Card />
      </CountProvider>
    </div>
  );
};

export default Head;
