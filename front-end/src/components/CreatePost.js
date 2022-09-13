import React, { useState } from 'react'
import lofipfp2 from '../assets/lofipfp2.png'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const uploadPost = async () => {
        try {
            await axios.post('http://localhost:3001/posts', {
                title: title,
                content: content,
                user_id: 16
            })

            // make it clear post went thru
        } catch (err) {
            console.log(err)
        }
    }




    return (
        <div>
            <div className='w-full shadow-md rounded bg-white p-4 border-solid border-2 border-sky-500'>
                <div className='flex space-x-2'>
                    <img src={lofipfp2} alt='pfp' className='h-10 w-10 rounded-full' />
                    <input className='bg-fFill px-4 py-3 w-full focus:outline-none rounded-full' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                    <input className='bg-fFill px-4 py-3 w-full focus:outline-none rounded-full' placeholder='What is on your mind?' onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className='border border-gray-500 border-opacity-10 mt-4'></div>
                <div className='flex justify-between'>
                    <button className='flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2' onClick={uploadPost}>
                        <span>Upload post</span>
                    </button>
                    <button className='flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2'>
                        <span>Upload photo</span>
                    </button>
                    <button className='flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2'>
                        <span>Upload video</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CreatePost;