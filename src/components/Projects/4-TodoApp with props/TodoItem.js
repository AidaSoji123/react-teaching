import React, { useState } from 'react';

function TodoItem({ todo, index, removeTodo, completeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false); // Manage editing state
  const [editText, setEditText] = useState(todo.text); // Store updated text

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, editText); // Save the new text if editing is complete
    }
    setIsEditing(!isEditing); // Toggle editing mode
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        todo.text
      )}

      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => completeTodo(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
