import React, { useState, useEffect } from 'react'
import { listAll, list, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../Firebase'
import { v4 } from 'uuid'

const About = () => {

  // const [img, setImg] = useState(null)
  // const [imgUrls, setImgUrls] = useState([])
  // // const [video, setVideo] = useState(null)

  // const imgsListRef = ref(storage, "images/");
  // const uploadFile = () => {
  //   if (img === null) return;
  //   const imgRef = ref(storage, `images/${img.name + v4()}`);
  //   uploadBytes(imgRef, img).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImgUrls((prev) => [...prev, url])
  //     })
  //   })
  // }

  // useEffect(() => {
  //   listAll(imgsListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImgUrls((prev) => [...prev, url])
  //       })
  //     })
  //   })
  // }, [])



  return (
    <div>About
      <p>testing upload feature on this page</p>
      {/* <input type='file' onChange={e => setImg(e.target.files[0])} /> */}
      {/* <button className='bg-blue-300' onClick={uploadFile}>Upload image</button> */}
      {/* {imgUrls.map((url) => <img key={url.id} className='h-52 w-52' src={url} />)} */}
      {/* <input type='file' onChange={e => setVideo(e.target.files[0])}/> */}
    </div>
  )
}

export default About