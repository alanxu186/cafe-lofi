import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import { useSelector } from 'react-redux'
import coffeeshop from '../assets/coffeeshop.gif'
import lofipfp5 from '../assets/lofipfp5.jpeg'

const ProfileHeader = () => {

    const user = useSelector(state => state.user)

    return (
        <div className='shadow'>

            <div>
                <div className='relative h-96 rounded-b flex justify-center'>
                    <img className='object-cover w-full h-96 rounded-b' src={coffeeshop} alt='cover-photo' />

                    <div className='absolute -bottom-6'>
                        <img className='object-cover border-4 border-white w-56 h-56 rounded-full' src={lofipfp5} />
                    </div>
                </div>

                <div className='text-center mt-6 text-3xl font-bold text-fBlack'>
                    {user.profile.name.charAt(0).toUpperCase() + user.profile.name.slice(1)}
                </div>
            </div>
            <div className='border border-fGrey mt-6 border-opacity-10'></div>

            <div className='flex justify-evenly'>
                <div className='px-4 py-5 border-b-4 border-black'>
                    Posts
                </div>
                <div className='px-4 py-5 text-fGrey'>
                    Followers
                </div>
                <div className='px-4 py-5 text-fGrey'>
                    Following
                </div>

            </div>
        </div>
    )
}

export default ProfileHeader