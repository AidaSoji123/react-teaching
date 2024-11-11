import React from "react";
import UserCard from "./UserCard";

// Parent component passing user data
const Parent = () => {
  const users = [
    { name: "John Doe", age: 28, location: "New York" },
    { name: "Jane Smith", age: 34, location: "Los Angeles" },
    { name: "Mike Johnson", age: 42, location: "Chicago" }
  ];

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Parent;
