import React, { useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../redux/userSlice"
import loginbg from '../assets/loginbg.mp4'

const Login = ({isRegistered, setIsRegistered, handleIsRegister}) => {

    const user = useSelector(state => state.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://127.0.0.1:3001/login', { email: email, password: password })
            if (res.data["token"]) {
                localStorage.setItem("jwt", res.data["token"])
                dispatch(
                    setUser(
                        {
                            profile: res.data.user
                        }
                    )
                )
            } else {
                // custome error handling
            }

            navigate('/')
        } catch (err) {
            console.log(err)
            alert('Wrong Credentials!')
        }
    }

    return (
        <div className='flex w-full h-screen'>
            <video src={loginbg} autoPlay loop muted />
            <div className='w-full flex items-center justify-center absolute top-32 opacity-95'>
                <form className='bg-[#3d98a3] px-10 py-20 rounded-3xl border-gray-200 text-center' onSubmit={handleLogin}>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-900 mt-4'>Welcome back! Please enter your details.</p>
                    <div className='mt-8'>
                        <div className='text-lg font-medium'>
                            <label>Email</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' type='email' required onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='text-lg font-medium'>
                            <label>Password</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' required onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#296469] text-white text-lg font-bold'>Login</button>
                        </div>
                        {/* <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#296469] text-white text-lg font-bold' onClick={handleIsRegister}>Sign Up</button>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login