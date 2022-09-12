import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const user = useSelector(state => state.user)
  //state for post
  const [text, setText] = useState('')

  //function to upload a post
  const uploadPost = async () => {
    try {
      await axios.post('http://localhost:4000/api/posts', {
        user: "currentUser",
        content: text
      }, { withCredentials: true })
      alert('Post was made!')
    } catch (err) {
      console.log(err)
      alert('Could not make post!')
    }
  }


  return (
    <div className="App">
      {user.isLoggedin ?

        <>
          <Navbar />
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Home uploadPost={uploadPost} />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile" element={<Profile uploadPost={uploadPost} setText={setText} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </>
        :

        <LoginPage />
      }
    </div>
  );
}

export default App;
