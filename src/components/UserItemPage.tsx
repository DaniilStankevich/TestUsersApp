import React, { FC, useState, useEffect } from "react"
import { ITodo, IUser } from "../types/types"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

type UserItemPageParams = {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)

  // Берем динамический параметр из строки запроса
  const params = useParams<UserItemPageParams>()

  const navigate = useNavigate()

  useEffect(() => {
    fetchusere()
  }, [])

  async function fetchusere() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      )

      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/users")}>Назад</button>
      <h1>Страница пользователей {user?.name}</h1>

      <div>{user?.email}</div>

      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  )
}

export default UserItemPage
