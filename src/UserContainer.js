import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import { randFirstName } from '@ngneat/falso'

const UserContainer = () => {

    const [usuarios,setUsuarios] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = () => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then((respuesta)=>{
            return respuesta.json()
        })
        .then((usuarios)=>{
            setUsuarios(usuarios)
        })
    }

    return (
        <UserList usuarios={usuarios}/>
    )
}

export default UserContainer