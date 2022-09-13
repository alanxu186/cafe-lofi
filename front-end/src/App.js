import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";

const App = () => {

  const user = useSelector(state => state.user)


  return (
    <div className="App">
      {user.isLoggedin ?

        <>
          <Navbar />
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile" element={<Profile />} />
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
