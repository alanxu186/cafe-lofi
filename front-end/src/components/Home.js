import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const Home = () => {

  return (
    <div className='flex justify-center h-screen'>
      <LeftContainer/>
      <PostContainer/>
      <RightContainer/>  
    </div>
  )
}

export default Home
