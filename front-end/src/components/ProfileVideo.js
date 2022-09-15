import React from 'react'
import totorobg from '../assets/totorobg.mp4'

const ProfileVideo = () => {
    return (
        <div className='shadow-md rounded-lg w-full p-4 border-solid bg-white border-2 border-sky-500'>
            <div className='text-xl font-bold text-black flex justify-center'>
                Totoro
            </div>

            <div className='mt-4 flex items-center'>
                <video src={totorobg}></video>
            </div>
        </div>
    )
}

export default ProfileVideo