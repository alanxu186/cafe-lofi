import React from 'react'
import lofipfp2 from '../assets/lofipfp2.png'
import lofipfp3 from '../assets/lofipfp3.jpeg'
import lofipfp4 from '../assets/lofipfp4.jpeg'
import lofipfp5 from '../assets/lofipfp5.jpeg'
// import { AiOutlineSetting } from 'react-icons/ai'


const LeftContainer = () => {
    return (
        <div className='w-1/5 pt-5 h-full hidden xl:flex flex-col fixed left-0 bg-blue-200'>
            <div className='flex justify-between items-center px-5 h-4 group'>
                <span className='font-semibold text-gray-500 text-lg'>Featured Artists</span>
            </div>

            <ul className='p-5'>
                <li className='border-b border-gray-500'></li>

                <li className='flex items-center space-x-3 mt-5 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp2} alt="pfp" />
                    <span className='font-semibold'> Koji</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp3} alt="pfp" />
                    <span className='font-semibold'> Kojiro</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp4} alt="pfp" />
                    <span className='font-semibold'> Kobo</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <img className='w-10 h-10 rounded-full' src={lofipfp5} alt="pfp" />
                    <span className='font-semibold'> Ken</span>
                </li>
                <li className='border-b border-gray-500'></li>
            </ul>


            <div className='flex justify-between items-center px-5 h-4 group'>
                <span className='font-semibold text-gray-500 text-lg'>Your shortcuts</span>
            </div>

            <ul className='p-5'>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className='font-semibold'>Profile</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    <span className='font-semibold'>Bookmark</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className='font-semibold'>Setting</span>
                </li>
                <li className='flex items-center space-x-3 mb-5 hover:bg-gray-200 rounded-lg transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span className='font-semibold'>Logout</span>
                </li>
            </ul>
        </div>
    )
}

export default LeftContainer