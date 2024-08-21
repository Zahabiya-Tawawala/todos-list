import React from 'react'
import Todo from "./Todoitem";

const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh',
    margin: '10px auto'
  }

  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <div  key={todo.sno}>
              <Todo todo={todo} onDelete={props.onDelete} />
              <hr />
            </div>
          )
        })
      }

    </div>
  )
}

export default Todos

// Warning: Each child in a list should have a unique "key" prop.
// Check the render method of Todos. See https://reactjs.org/link/warning-keys for more information.
// at Todos (http://localhost:3000/static/js/bundle.js:705:26)
// at App (http://localhost:3000/static/js/bundle.js:70:76)
// to resolve this we can add the key to the div element instread of todo

// return (
//   <div className='container my-3' style={myStyle}>
//     <h3 className='my-3'>Todos List</h3>
//     {props.todos.length === 0 ? "No Todos to display" :
//       props.todos.map((todo) => {
//         return (
//           <>
//             <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
//             <hr />
//           </>
//         )
//       })
//     }

//   </div>
// )

// so we can change it like this 

