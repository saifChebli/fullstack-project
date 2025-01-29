import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Link , useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
     const res = await axios.post('http://localhost:5000/api/login', {
         email: email,
         password: password,
      })
      if(res.status === 200){
        toast.success('Welcome Back')
        setEmail('')
        setPassword('')
        navigate('/job-list')
      }
    } catch (error) {
        toast.error("This didn't work.")
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
        <Toaster position="top-left"/>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Login
          </h1>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              onClick={() => handleLogin()}
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Login
            </button>
          <hr className="my-6 border-gray-300 w-full" />
          <h1>Create an Account <Link to='/signup'>Sign Up</Link> </h1>
        
        </div>
      </div>
    </section>
  );
};

export default Login;
