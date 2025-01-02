import { useState } from "react"

export default function TodoInput(props) {
    const {todoValue, setTodoValue, hadleAddTodos} = props

    return (
        <header>
            <input value={todoValue} onChange={(event) => {
                setTodoValue(event.target.value);
            }} placeholder="Enter todo..."/>
            <button onClick={() => {
                hadleAddTodos(todoValue)
                setTodoValue('')
            }}>
                Add
            </button>
        </header>
    )
}