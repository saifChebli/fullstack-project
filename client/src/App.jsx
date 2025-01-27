
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import axios from 'axios'


function App() {


  return (
    <>
      <Navbar />
      <UserList />
    </>
  )
}

export default App
