import React from 'react'
import Todo from "./Todoitem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.map((todo) => {
        return (
          <>
            <h3>example of adding more than two tags in for loop mapping</h3>
            <Todo todo={todo} onDelete={props.onDelete} />
          </>
        )

      })}
    </div>
  )
}

export default Todos
