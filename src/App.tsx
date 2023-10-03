import { useState, useEffect  } from 'react'
import Card, { CardVariant } from './components/Card'
import { IUser } from './types/types'
import axios from 'axios'
import { List } from './components/List'
import UserItem from './components/UserItem'

export const App = () => {

  const [ users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchuseres() 
  }, [])

  async function fetchuseres() {
      try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

            setUsers(response.data)
      } catch (e) {
          alert(e)
      }
  }
 
//onClick={(num: number) => console.log(num)} 

  return (
    <div>

      <Card   variant={CardVariant.outlined}   width='200px' height='200px'>
            <button>Кнопка</button>  
      </Card>


      <List items={users}   renderItem={(us:IUser)  => <UserItem  user={us}  key={us.id}/>   } />


    </div>
  )
}

export default App