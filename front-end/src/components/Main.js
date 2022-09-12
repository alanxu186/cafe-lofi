import React from 'react'
import lofibg from '../assets/lofibg.mp4'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='main'>
            {/* <div className='overlay'></div> */}
            <video src={lofibg} autoPlay loop muted />
            <div className='content'>
                <Typed className='md:text-8xl font-bold'
                    strings={['Welcome to Cafe Heiwa!']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
                {/* <div>
                    <button><Link to={"/login"}>Login</Link></button>
                    <button><Link to={"/register"}>Create an account</Link></button>
                </div> */}
            </div>
        </div>
    )
}

export default Main
