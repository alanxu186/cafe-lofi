import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { setUser } from "./redux/userSlice.js"
import Register from "./components/Register";


const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [profileImage, setProfileImage] = useState(null)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/users/${user.profile.id}`).then(res => res.json()).then(data => setImageUrl(data.avatar_url))
  }, [])

  function changeImage() {
    if (profileImage) {
      const formData = new FormData()
      formData.append("avatar", profileImage)
      fetch(`http://localhost:3001/user_image/${user.profile.id}`, {
        method: "PATCH",
        body: formData,
      }).then(res => res.json()).then(data => setImageUrl(data.avatar_url))
    }
  }

  useEffect(() => {
    let token = localStorage.getItem("jwt")
    let grabProfile = () => {
      fetch("http://127.0.0.1:3001/profile", {
        "Content-Type": "application/json",
        headers: {
          jwt: token
        }
      })
        .then(res => res.json())
        .then(data => {
          dispatch(
            setUser(
              {
                profile: data
              }
            )
          )
        })
    }
    if (!user.isLoggedin && token) grabProfile()
  }, [])


  return (
    <div className="App">
      {user.isLoggedin ?

        <>
          <Navbar />
          <Routes>
            {/* <Route path="/main" element={<Main />} /> */}
            <Route path="/" element={<Home imageUrl={imageUrl} setImageUrl={setImageUrl} />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/bookmark" element={<Bookmark />} /> */}
            <Route path="/profile" element={<Profile setProfileImage={setProfileImage} imageUrl={imageUrl} setImageUrl={setImageUrl} changeImage={changeImage} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </>
        :
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

        </Routes>


      }
    </div>
  );
}

export default App;
