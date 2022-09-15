import React from 'react'
import lofipfp2 from '../assets/lofipfp2.png'
import lofipfp3 from '../assets/lofipfp3.jpeg'
import lofipfp4 from '../assets/lofipfp4.jpeg'
import lofipfp5 from '../assets/lofipfp5.jpeg'
import lofipfp6 from '../assets/lofipfp6.jpeg'
import lofipfp7 from '../assets/lofipfp7.png'
import { Link, useNavigate } from 'react-router-dom'
import { clearUser } from "../redux/userSlice.js"
import { useSelector, useDispatch } from "react-redux";


const LeftContainer = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch(
            clearUser()
        )
    }


    return (
        <div className='w-1/5 pt-5 h-full hidden xl:flex flex-col fixed left-0'>
            <div className='flex justify-between items-center px-5 h-4 group'>
                <span className='mt-2 font-semibold text-gray-700 text-lg'>Following</span>
            </div>

            <ul className='p-5'>
                <li className='border-b border-gray-500'></li>

                <li className='flex items-center space-x-3 mt-5 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp2} alt="pfp" />
                    <span className='font-semibold'> Koji</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp3} alt="pfp" />
                    <span className='font-semibold'> Kyle</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp4} alt="pfp" />
                    <span className='font-semibold'> Kobo</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp5} alt="pfp" />
                    <span className='font-semibold'> Jason</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp6} alt="pfp" />
                    <span className='font-semibold'> Alex</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp7} alt="pfp" />
                    <span className='font-semibold'> Marguerite</span>
                </li>
                <li className='border-b border-gray-500'></li>
            </ul>


            <div className='flex justify-between items-center px-5 h-4 group'>
                <span className='font-semibold text-gray-700 text-lg'>Your shortcuts</span>
            </div>

            <ul className='p-5'>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span> <Link to={"/profile"} className='font-semibold' >{user.profile.name}</Link> </span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span> <Link to={"/login"} className='font-semibold' onClick={handleLogout}>Logout</Link> </span>
                </li>
            </ul>
        </div>
    )
}

export default LeftContainer