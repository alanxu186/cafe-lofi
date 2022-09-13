import React, { useEffect, useState } from 'react'
import coffeeshop from '../assets/coffeeshop.gif'
import lofipfp5 from '../assets/lofipfp5.jpeg'
import axios from 'axios'
import PostTile from './PostTile'
import ProfileHeader from './ProfileHeader'
import ProfileBio from './ProfileBio'
import CreatePost from './CreatePost'
import PostContainer from './PostContainer'
import { useSelector } from 'react-redux'


const Profile = ({uploadPost, setContent}) => {


  return (
    <div>
      <ProfileHeader />

      <div className='px-5 grid grid-cols-12 pt-4 gap-4'>
        <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
          <ProfileBio />
        </div>

        <div className='flex-row row-start-1 col-span-7 col-start space-y-4'>
          <CreatePost uploadPost={uploadPost} setContent={setContent} />
        </div>
      </div>

    </div>
  )
}

export default Profile