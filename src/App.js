import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { useState, useEffect } from 'react';
// import Todo from "./MyComponents/Todo";

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // delteing this way in react wont work as it will not re render the page instead we do this 

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  //  on delete function wont work as in react to change a state we need to set a useState 
  // set todoes is a functon that will change the state of todos when clciked on on delete button

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    // let sno = todos[todos.length-1] + 1;
    // have to take the sno of last todo no and then add plus 1 to it so the code will look somehow like this:- 
    // suppose we delete all the todo and their is no srno so for that case we need to add an if statement for what to do when the serial no is 0
    let sno;
    if (todos.length == 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      {/* passing a javascript object in the todos */}
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
