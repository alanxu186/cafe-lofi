import React, { useEffect } from 'react'
import Login from './Login'
// import Register from './Register'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Register from './Register'


const LoginPage = () => {
    const user = useSelector(state => state.user)

    const [isRegistered, setIsRegistered] = useState(false)

    const handleIsRegister = () => {
        setIsRegistered(true)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (user.isLoggedin) navigate("/")
    }, [user.isLoggedin])

    return (
        <div className="login-background" >
            {!user.isLoggedin ?
                <Login handleIsRegister={handleIsRegister}/>
                :

                <Register />
            }
        </div>
    )
}

export default LoginPage