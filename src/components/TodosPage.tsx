import React, { FC, useState, useEffect } from "react"
import { List } from "./List"
import { ITodo, IUser } from "../types/types"

import TodoItem from "./TodoItem"
import axios from "axios"

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  console.log("Тудушки")

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      )

      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      )}
    />
  )
}

export default TodosPage
