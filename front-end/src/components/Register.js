import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import registerbg from '../assets/registerbg.mp4'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    let token = localStorage.getItem('jwt')
    try {
      await axios.post('http://localhost:3001/users',
        {
          name: name,
          email: email,
          password: password,
          bio: bio,
          location: location,
        }, {
        headers: {
          jwt: token
        }
      })
      // console.log(res.data)
      navigate('/login')
    } catch (err) {
      console.log(err)
      // alert('Account already taken!')
      // console.log('account has already been taken!')
    }
  }

  return (
    <div className='flex w-full h-screen'>
      <video src={registerbg} autoPlay loop muted />

      <div className='w-full flex items-center justify-center absolute top-20'>
        <form className='bg-[#e5c3d1] px-10 py-12 rounded-3xl border-gray-200 placeholder-opacity-95' onSubmit={handleRegister}>
          <h1 className='text-4xl font-semibold'>Create your account!</h1>
          {/* <p className='font-medium text-lg text-gray-500 mt-4'>Create your account!</p> */}
          <div className='mt-8'>
            <div className='text-lg font-medium'>
              <label>Name</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent mb-1' placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
            </div>

            <div className='text-lg font-medium'>
              <label>Email</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent mb-1' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className='text-lg font-medium'>
              <label>Password</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent mb-1' placeholder='Enter your password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className='text-lg font-medium'>
              <label>Bio</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent mb-1' type='text' placeholder='Enter your bio' onChange={(e) => { setBio(e.target.value) }} />
            </div>

            <div className='text-lg font-medium'>
              <label>Location</label>
              <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent mb-1' type='text' placeholder='Enter your location' onChange={(e) => { setLocation(e.target.value) }} />
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#aab6fb] text-white text-lg font-bold'>Create account
              </button>
            </div>
          </div>
        </form>

      </div>

    </div>
  )

}

export default Register