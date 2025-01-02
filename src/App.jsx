import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Do homework',
    'Sleep 7 hours a day'
  ])

  const [todoValue, setTodoValue] = useState('')

  function hadleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index 
    })
    setTodos(newTodoList)
  }
  function handleEditTodo(index) {}

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} hadleAddTodos={hadleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
