import React from 'react'
import TodoName from './TodoName'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const TodoV1 = () => {
  return (
    <div className='container p-3'>
    <TodoName/>
    <br/>
    <AddTodo/> 
    <br/>
    <TodoItem/>
    </div>
  )
}

export default TodoV1