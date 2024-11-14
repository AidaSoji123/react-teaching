import TodoItem from "./TodoItem";

function TodoList({ todos = [], removeTodo, completeTodo, editTodo }) {
    if (!todos || todos.length === 0) {
      return <p>No todos available</p>;
    }
  
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  