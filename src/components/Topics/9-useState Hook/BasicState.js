import React, { useState } from "react";

const BasicState = () => {
  const [course, setCourse] = useState("React");

  const handleCourse = (e) => {
    setCourse("Python");
  };
  return (
    <div className="text-center">
      <h1 className="bg-warning text-white">useState Hook in React</h1>

      <p className="text- danger">We are Learning {course}</p>
      <button onClick={handleCourse} className="btn btn-primary">
        Course Change
      </button>
    </div>
  );
};

export default BasicState;
