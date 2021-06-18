 import "./App.css";
import Header from "./MyComponents/Header";
import  {Todos}  from "./MyComponents/Todos";
import  {Footer}  from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App()  {
   
  const onDelete =(todo) =>{
    console.log("I am on Delete",todo);

    //Soft Delete in React using useState Hooks
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc) =>{
    console.log("I am adding this todo",title,desc);
    let srno;
    if(todos.length == 0){
      srno = 0;
    }
    else{
     srno  = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno : srno,
      title: title,
      desc: desc
    }
    //To update the todos ... means array 
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([]);
 
  return (
    <>
      <Header  title="MY TODO LIST" searchBar = {false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
