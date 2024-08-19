import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
// import Todo from "./MyComponents/Todo";

function App() {
  const onDelete = () => {
    console.log("I am on delete")
  }
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the store",
      desc: "You need to go to the store to get this job done"
    }
]
  return (
    <>
    <Header title="My Todos List" searchBar = {false}/>
    {/* passing a javascript object in the todos */}
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
