import React, { useEffect, useState } from "react";
const Dropdown = () => {
  const data = {
    kerala: "Thiruvananthapuram",Karnataka: "Bengaluru",Tamilnadu: "Chennai"};

  const [selectedState, setSelectedState] = useState("Kerala");
  const [capital, setCapital] = useState("Thiruvananthapuram");

  const changeCapital = (e) => {
    setSelectedState(e.target.value);
    setCapital(data[e.target.value]);
  };
  const changeState = () => {
    console.log("changeState called");
  };
  useEffect(changeState, [selectedState]);
  return (
    <div className="text-center mt-5">
      <select onChange={changeCapital}>
        <option value={"Kerala"}>Kerala</option>
        <option value={"Karnataka"}>Karnataka</option>
        <option value={"Tamilnadu"}>Tamilnadu</option>
      </select>
      <h1 className="bg-success">The selected State is : {selectedState}</h1>
      <h2 className="bg-warning text-danger">
        Capital of {selectedState} is :{capital}{" "}
      </h2>
    </div>
  );
};

export default Dropdown;
