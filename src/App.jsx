import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Do homework',
    'Sleep 8 hours a day'
  ])

  function hadleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {}
  function handleEditTodo(index) {}

  return (
    <>
      <TodoInput hadleAddTodos={hadleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
