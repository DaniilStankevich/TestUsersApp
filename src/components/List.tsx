import React, { FC } from 'react'


interface ListProps<T> {
    items: T[]                  
    renderItem: (item: T) => React.ReactNode 
}


// Универсальный компонент являющийся списком для разных типов (список постов, пользователей и т.д)
export function List<T>(props:    ListProps<T>) {

//(user: IUser) => <UserItem  user={user} key={user.id} />

    return (
        <div>
            {props.items.map(props.renderItem)} 
        </div>
    )

}
