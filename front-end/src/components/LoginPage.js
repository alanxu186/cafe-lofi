import React, { useEffect } from 'react'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from "../redux/userSlice.js"


const LoginPage = () => {
    const user = useSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (user.isLoggedin) navigate("/")
    }, [user.isLoggedin])

    return (
        <div>
        {user ?
            <Login />
            :
            <Register />
        }
        </div>
    )
}

export default LoginPage