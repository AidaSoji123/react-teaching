import React from 'react';

// Component to display individual user details
const UserCard = ({ user }) => {
  return (
    <div className="card m-3 p-3 border-dark">
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default UserCard;
