import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import { Routes, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const user = useSelector(state => state.user)

  const [content, setContent] = useState('')

  // create post function 
  const uploadPost = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/posts', {
        content: content, 
        user_id: 1
      })
      .then(setContent(''))
      alert('Post has been made!')
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
            <Route path="/" element={<Home uploadPost={uploadPost} content={content} setContent={setContent} />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile" element={<Profile content={content} uploadPost={uploadPost} setContent={setContent} />} />
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
