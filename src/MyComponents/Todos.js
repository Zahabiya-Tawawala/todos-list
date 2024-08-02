import React from 'react'
import Todo from "./Todoitem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3> 
      {props.todos.map((todo)=> {
        return <Todo todo = {todo} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
