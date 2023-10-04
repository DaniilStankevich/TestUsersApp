import { useState, useEffect } from "react"
import { ITodo, IUser } from "./types/types"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import UserPage from "./components/UserPage"
import TodosPage from "./components/TodosPage"
import { NavLink } from "react-router-dom"
import UserItemPage from "./components/UserItemPage"
import TodoItemPage from "./components/TodoItemPage"

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

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
    <div>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route
          path="/users"
          element={<UserPage />}
        />

        <Route
          path="/todos"
          element={<TodosPage />}
        />

        <Route
          path="/users/:id"
          element={<UserItemPage />}
        />
        <Route
          path="/todos/:id"
          element={<TodoItemPage />}
        />
      </Routes>
    </div>
  )
}

export default App
