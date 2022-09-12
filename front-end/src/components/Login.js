import React, { useState } from "react"
import { auth, provider } from '../Firebase'
import { signInWithPopup } from "firebase/auth"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// import Register from "./Register"

const Login = ({ setEmail, setPassword, handleLogin }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result)
                axios.post('http://localhost:4000/api/auth/google', {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                })
                    .then((result) => {
                        dispatch()
                    })
                navigate('/')
            })
            .catch((err) => {
                dispatch()
            })
    }

    // const [showRegister, setShowRegister] = useState(false)

    // const switchRegister = () => {
    //     setShowRegister(!showRegister)
    //     console.log('hi')
    // }

    return (
        <div className='flex w-full h-screen'>
            <div className='w-full flex items-center justify-center '>
                <form className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
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
                            <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold' onClick={handleLogin}>Login</button>
                            <button className="bg-blue-300" onClick={signInWithGoogle}>Login with google</button>

                            {/* <p className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold' onClick={switchRegister}>Create An Account</p> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login