import React, { FC, useState, useEffect } from "react"
import { ITodo, IUser } from "../types/types"
import axios from "axios"
import { List } from "./List"
import UserItem from "./UserItem"
import { useNavigate } from "react-router-dom"

export const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchuseres()
  }, [])

  async function fetchuseres() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      )

      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => navigate("/users/" + user.id)}
          user={user}
        />
      )}
    />
  )
}

export default UserPage
