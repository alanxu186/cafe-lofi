import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostTile from './PostTile'
import ProfileHeader from './ProfileHeader'
import ProfileBio from './ProfileBio'
import CreatePost from './CreatePost'
import { useSelector } from 'react-redux'


const Profile = ({ setProfileImage, changeImage, imageUrl, setImageUrl }) => {

  const user = useSelector(state => state.user)
  const [myPosts, setMyPosts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/users/${user.profile.id}`).then(res => res.json()).then(data => setImageUrl(data.avatar_url))
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      let token = localStorage.getItem("jwt")
      try {
        const res = await axios.get(`http://localhost:3001/my_posts`, {
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
    <div className='mt-32'>
      <ProfileHeader setProfileImage={setProfileImage} changeImage={changeImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <div className='px-5 grid grid-cols-12 pt-4 gap-4'>
        <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
          <ProfileBio />
        </div>

        <div className='flex-row row-start-1 col-span-7 col-start space-y-4'>
          <CreatePost userPosts={myPosts} setUserPosts={setMyPosts} imageUrl={imageUrl} setImageUrl={setImageUrl} />
          {myPosts.map((post) => <PostTile key={post.id} post={post} myPosts={myPosts} setMyPosts={setMyPosts} imageUrl={imageUrl} />)}
        </div>
      </div>

    </div>
  )
}

export default Profile