import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <main className="py-10 flex flex-col items-center h-screen w-full todo-app bg-gradient-to-tr from-custom-bg_main_first via-custom-bg_main_second to-custom-bg_main_third">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <List todos={todos} setTodos={setTodos} />
      </main>
    </>
  );

  // const [todos, setTodos] = useState([]);
  // const addTodo = (text) =>{
  //   let id = 1;
  //   if (todos.length >0){
  //     id = todos[0].id +1;
  //   }
  //   let todo = {id: id ,text: text, completed: false}
  //   let newTodos =  [todo, ...todos];
  //   console.log(newTodos)
  //   setTodos(newTodos)
  // }

  // const removeTodo = (id) =>{
  //   let updateTodo =  [...todos].filter((todo) => todo.id !== id)
  //   setTodos(updateTodo);
  // }

  // const completedTodo = (id) =>{
  //   let updateTodo = todos.map((todo)=>{
  //     if(todo.id === id){
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   })
  //   setTodos(updateTodo);
  // }
  // return (
  //   <>
  //     <Header />
  //     <div className="h-screen w-full todo-app bg-gradient-to-tr from-custom-bg_main_first via-custom-bg_main_second to-custom-bg_main_third">
  //       <div className="py-4">
  //         <Form addTodo={addTodo} />
  //         <hr className="seperator" />
  //         {todos.map((todo)=>{
  //           return(
  //             <TodoList completedTodo={completedTodo} removeTodo={removeTodo} todo={todo} key={todo.id}/>
  //           )
  //         })}
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
