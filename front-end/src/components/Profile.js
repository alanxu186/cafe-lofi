import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostTile from './PostTile'
import ProfileHeader from './ProfileHeader'
import ProfileBio from './ProfileBio'
import CreatePost from './CreatePost'
import { useSelector } from 'react-redux'


const Profile = () => {

  const [myPosts, setMyPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      let token = localStorage.getItem("jwt")
      try {
        const res = await axios.get(`http://localhost:3001/my_posts`,{
          headers: {
            jwt: token
          }
        })
        setMyPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (myPosts.length === 0) getPosts()

  }, [])


  return (
    <div>
      <ProfileHeader />

      <div className='px-5 grid grid-cols-12 pt-4 gap-4'>
        <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
          <ProfileBio />
        </div>

        <div className='flex-row row-start-1 col-span-7 col-start space-y-4'>
          <CreatePost userPosts={myPosts} setUserPosts={setMyPosts}/>
          {myPosts.map((post) => <PostTile key={post.id} post={post} myPosts={myPosts} setMyPosts={setMyPosts}/>)}
        </div>
      </div>

    </div>
  )
}

export default Profile