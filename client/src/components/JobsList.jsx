import React , {useEffect , useState} from 'react'
import { FaPlus , FaTrash , FaEdit} from 'react-icons/fa'
import axios from 'axios'
import avatar from '../assets/avatar.png'


const JobsList = () => {

  const [jobs, setJobs] = useState([])

  const getAllJobs = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/jobs')
        setJobs(response.data)
    } catch (error) {
        console.log(error)
    }
  }



  useEffect(()=>{
    getAllJobs()
  },[])
  return (
    <div className='mx-40 mt-10'>    
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Jobs</h1>

            <div className="search-bar flex justify-between items-center">
                <p>{jobs.length} Job Posts</p>
                <input type="text" className='mx-8' placeholder='Search...' />
                <button className='btn'> <FaPlus className='mr-4' /> Add Job</button>
            </div>
        </div>  

        <table>
          <thead>
              <td>Job Title</td>
              <td>Job Description</td>
              <td>Salary To</td> 
              <td>Salary From</td>
          </thead>
          <tbody>
          {
            jobs.map(job=>{
              return (
                <tr key={job._id} className='p-16'>
                      <td>{job.title}</td>
                      <td>{job.description}</td>
                      <td>
                            {job.salary_to} Dt
                        </td>
                      <td>
                            {job.salary_from} Dt
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

export default JobsList