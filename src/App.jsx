import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './Components/UsersForm'
import UsersList from './Components/UsersList'

function App() {
  
  const [usersList,setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect( () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then ( res => setUsersList(res.data))
  },[])

  const getUser = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then ( res => setUsersList(res.data))
  }

  const addUser = (user,cleanForm) => {
    axios.post('https://users-crud.academlo.tech/users/', user)
    .then( () => getUser())
    cleanForm()
  }

  const deleteUser = (userDelete) => {
    axios.delete(`https://users-crud.academlo.tech/users/${userDelete.id}/`)
    .then( () => getUser())
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const updateUser = (user) => {
    axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, user)
    .then( () => getUser())
    setUserSelected(null)
  }

  console.log(usersList)

  return (
    <div className='app_container'>
      <UsersForm addUser={addUser} userSelected={userSelected} updateUser={updateUser}/>
      <UsersList usersList={usersList} deleteUser={deleteUser} selectUser={selectUser}/>
    </div>
  )
}

export default App
