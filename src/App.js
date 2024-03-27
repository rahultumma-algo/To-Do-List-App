import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

import AddTodo from "./MyComponents/AddTodo";
import { useState } from "react";

function App() {
  const SearchResults = ({ todos }) => {
    return (
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map(todo => (
            <li key={todo.sno} className="list-group-item">
              {todo.title}
            </li>
          ))
        ) : (
          <li className="list-group-item">Not found</li>
        )}
      </ul>
    );
  }
  
  const onAdd = (newTodo) => {
    const newSno = todos.length + 1;
    const currentTime = new Date().toLocaleString(); // Get current timestamp
    setTodos([...todos, { ...newTodo, sno: newSno, status: true, timestamp: currentTime }]);
  };
  

  const onComplete = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.sno === todo.sno) {
        return { ...item, status: !item.status }; // Toggle the status
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const onDelete = (todo) => {
    console.log("i am on Delete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Get Job",
      desc: "Need to get job",
      status: true, // Example status
      timestamp: "2024-03-29 10:00 AM" // Static timestamp
    }, 
    {
      sno: 2,
      title: "Get Money",
      desc: "Need to get Money",
      status: true, // Example status
      timestamp: "2024-03-29 11:30 AM" // Static timestamp
    }, 
    {
      sno: 3,
      title: "Get Honey",
      desc: "Need to get Honey",
      status: false, // Example status
      timestamp: "2024-03-29 01:45 PM" // Static timestamp
    }
  ]);
  

  return (
    <>
      <Header title="EasyTasker" searchBar={true} todos={todos}  SearchResults={SearchResults}/>
      <AddTodo onAdd={onAdd}/>
      <Todos todos={todos} onDelete={onDelete} onComplete={onComplete} />
      <Footer />
    </>
  );
}

export default App;
