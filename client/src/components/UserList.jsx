import React , {useEffect , useState} from 'react'
import { FaPlus , FaTrash , FaEdit} from 'react-icons/fa'
import axios from 'axios'
import avatar from '../assets/avatar.png'


const UserList = () => {

  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/get-users')
        setUsers(response.data)
    } catch (error) {
        console.log(error)
    }
  }



  useEffect(()=>{
    getAllUsers()
  },[])
  console.log(users)
  return (
    <div className='mx-40 mt-10'>    
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Members</h1>

            <div className="search-bar flex justify-between items-center">
                <p>{users.length} members</p>
                <input type="text" className='mx-8' placeholder='Search...' />
                <button className='btn'> <FaPlus className='mr-4' /> Add Member</button>
            </div>
        </div>  

        <table>
          <thead>
              <td>Photo</td>
              <td>Name</td>
              <td>E-mail</td> 
              <td>Action</td>
          </thead>
          <tbody>
          {
            users.map(user=>{
              return (
                <tr key={user._id} className='p-16'>
                      <td className='flex justify-center items-center'>
                        <img src={avatar} alt="user image" width={80} />
                        </td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button><FaTrash /></button>
                        <button>
                          <FaEdit />
                        </button>
                        </td>
                </tr>
              )
            })
          }
          </tbody>
         
           
        </table>

    </div>
  )
}

export default UserList