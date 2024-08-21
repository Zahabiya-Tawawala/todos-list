import React from 'react'

const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* here we are using an arraow function to PASS a function rather than calling it */}
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todo
// Compare this snippet from todos-list/src/MyComponents/Todoitem.js: 