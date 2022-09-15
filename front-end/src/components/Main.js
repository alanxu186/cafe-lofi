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
                <Typed className='text-7xl font-bold'
                    strings={['Welcome to Cafe Heiwa!']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
                <div className='flex space-x-10 mt-10'>
                    <button className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <Link className='text-3xl' to={"/login"}>
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-400 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span></Link>
                    </button>

                    <button className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <Link className='text-3xl' to={"/register"}>
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-400 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Register</span></Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Main
