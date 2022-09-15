import React, { useEffect, useState } from 'react'
import lofipfp7 from '../assets/lofipfp7.png'
import coffeeshop from '../assets/coffeeshop.gif'
import { format } from 'timeago.js'
import axios from 'axios'

const PostTile = ({ myPosts, setMyPosts, post, imageUrl }) => {
  const { user, content, created_at, post_image } = post
  const [updateContent, setUpdateContent] = useState('')



  const updatePost = async () => {
    let token = localStorage.getItem("jwt")
    try {
      const res = await axios.patch(`http://localhost:3001/posts/${post.id}`, {
        content: updateContent
      }, {
        headers: {
          jwt: token
        }
      })
      console.log(res)
      setUpdateContent('')
      setMyPosts(myPosts.map((item) => {
        if (item.id === res.data.id) {
          return res.data
        }
        else {
          return item
        }
      }))
    } catch (err) {
      console.log(err)
    }
  }



  const deletePost = async () => {
    let token = localStorage.getItem("jwt")
    try {
      let res = await axios.delete(`http://localhost:3001/posts/${post.id}`,
        {
          headers: {
            jwt: token
          }
        })
      setMyPosts(myPosts.filter((item) => (item.id !== post.id)))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>

      <div className='shadow bg-white mt-4 mb-10 rounded-lg border-solid border-2 border-sky-500'>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex space-x-2 items-center'>
            <div className='relative'>
              <img className='w-10 h-10 rounded-full' src={`http://localhost:3001${imageUrl}`} alt='pfp' />
              <span className='bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2'></span>
            </div>
            <div>
              <div className='font-semibold'>
                {user.name}
              </div>
              <span className='text-sm text-gray-500'>{format(created_at)}</span>
            </div>
          </div>

          <div className='flex space-x-2'>
            <input className='shadow appearance-none border rounded w-full' value={updateContent} type='text' placeholder='Edit text' onChange={(e) => setUpdateContent(e.target.value)} />
            <button onClick={updatePost}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </button>

            <button onClick={deletePost}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>

            </button>
          </div>

        </div>

        <div className='text-justify px-4 py-2'>
          {content}
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src={`http://localhost:3001/${post_image}`} alt='post-img' />
        </div>

        <div className='py-2 px-2'>
          <div className='border border-gray-200 border-l-0 border-r-0 py-1'>
            <div className='flex space-x-2'>
              <div className='w-1/2 flex space-x-2 justify-center items center hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <button className='text-sm font-semibold'>Like</button>
              </div>

              <div className='w-1/2 flex space-x-2 justify-center items center hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <button className='text-sm font-semibold'>Comment</button>
              </div>

            </div>
          </div>
        </div>

        <div className='py-2 px-4'>
          <div className='flex space-x-2'>
            <img className='w-9 h-9 rounded-full' src={`http://localhost:3001${imageUrl}`} alt='pfp' />
            <div className='flex-1 flex bg-gray-100'>
              <input type='text' placeholder='Write a comment...' className='outline-none bg-transparent flex-1' />
              <button className='flex space-x-0 items-center justify-center'>Send</button>
            </div>
          </div>
        </div>

      </div>

    </div>


  )
}

export default PostTile