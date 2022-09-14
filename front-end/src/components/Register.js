import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const registerInfo = {name, email, password, bio, location}
    try {
        await axios.post('http://localhost:3001/users', 
        { registerInfo })
        // console.log(res.data)
        //useNavigate?
        navigate('/profile')
    } catch (err) {
        alert('Account already taken!')
        // console.log('account has already been taken!')
    }

  return (
    <div className='flex w-full h-screen'>

      <div className='w-full flex items-center justify-center '>
        <form className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200' onSubmit={handleRegister}>
          <h1 className='text-5xl font-semibold'></h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Create your account!</p>
          <div className='mt-8'>
            <div className='text-lg font-medium'>
              <label>Name</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your name' onChange={(e) => { setName(e.target.value)}} />
            </div>

            <div className='text-lg font-medium'>
              <label>Email</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value)}} />
            </div>

            <div className='text-lg font-medium'>
              <label>Password</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' onChange={(e) => { setPassword(e.target.value)}} />
            </div>

            <div className='text-lg font-medium'>
              <label>Bio</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your bio' type='password' onChange={(e) => { setBio(e.target.value)}} />
            </div>

            <div className='text-lg font-medium'>
              <label>Location</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your location' type='password' onChange={(e) => { setLocation(e.target.value)}} />
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold'>Create account</button>
            </div>
          </div>
        </form>

      </div>

    </div>
  )
}
}

export default Register