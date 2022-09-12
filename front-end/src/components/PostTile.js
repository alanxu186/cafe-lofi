import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import lofipfp2 from '../assets/lofipfp2.png'
import { format } from 'timeago.js'

const PostTile = ({singlePost, deletePost, getposts, setPosts}) => {

  const { currentUser} = useSelector(state => state.user)
  const [editPost, setEditPost] = useState('')

  const {content, createdAt} = singlePost
  // console.log(singlePost)

  const updatePost = async (id) => {
    console.log(id)
    try {
      await axios.put('http://localhost:4000/api/posts/' + id, {
        // user: currentUser, 
        content: editPost
      }, { withCredentials: true })
    } catch (err) {
      console.log(err)
      alert('could not update post!')
    }
    getposts()
  }


  return (
    <div>
      <div className='shadow bg-white mb-5'>

        <div className='flex items center justify-between px-4 py-2'>
          <div className='flex space-x-2 items-center'>
            <div className='relative'>
              <img src={lofipfp2} className='w-10 h-10 rounded-full' />
              <span className='bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2'></span>
            </div>

            <div>
              <div className='text-md font-semibold'>{currentUser.name}</div>
              <span className='text-md text-gray-500'>{format(createdAt)}</span>
            </div>

            <div>
              <input placeholder='edit the post' onChange={(e) => setEditPost(e.target.value)}/>
              <button className='bg-gray-300' onClick={() => updatePost(singlePost._id)}>Edit button</button>
            </div>

            <div>
              <button className='bg-gray-300' onClick={() => deletePost(singlePost._id)}>Delete button</button>
            </div>

          </div>
        </div>


        <div className='text-justify px-4 py-2 text-md'>
          {content}
        </div>

        <div className='py-2'>
          {/* <img className='w-full' src={lofipfp2} /> */}
        </div>

        <div className='py-2 px-4'>
          <div className='border border-gray-200'>
            <div className='flex space-x-2'>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Like</button>
              </div>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Comment</button>
              </div>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Share</button>
              </div>
            </div>
          </div>
        </div>

        <div className='py-2 px-4'>
          <div className='flex space-x-2'>
            <img src={lofipfp2} className='w-9 h-9 rounded-full' />
            <div className='flex-1 bg-gray-100'>
              <input className='outline-none bg-transparent flex-1' type='text' placeholder='Write a comment...' />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PostTile