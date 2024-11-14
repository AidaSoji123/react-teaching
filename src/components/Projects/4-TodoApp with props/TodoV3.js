import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './TodoV3.css'; // Import CSS

function TodoV3() {
  const [todos, setTodos] = useState([]); // Correctly initialize todos

  const addTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const completeTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <header>
        <h1 className="title">Todo App</h1>
      </header>
      <main>
        <div className='container'>
            <div className='row'>
                <div className='col-8'><TodoInput addTodo={addTodo} /></div>
        
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
        </div>
        </div>
      </main>
    </div>
  );
}

export default TodoV3;
