import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/userSlice.js"

const Navbar = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch(
            clearUser()
        )
        navigate('/')
    }

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed top-0 w-full text-white flex justify-between p-4 items-center z-50 bg-[#18434e]'>

            <div className='text-2xl font-bold text-center uppercase p-4'>
                <h1><Link to='/' className='block text-7xl'> Cafe Heiwa </Link> </h1>
                {/* <img src={cafelogo}/> */}
            </div>

            <nav>
                <div className='absolute right-6 md:hidden top-6 scale-150'>
                    <AiOutlineMenu onClick={handleNav} className='scale-150 cursor-pointer' />
                </div>

                <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10 h-20 ">
                    {/* <li> <Link to={"/main"}>Main</Link> </li> */}
                    <li> <Link to={"/"}>Home</Link> </li>
                    {/* <li> <Link to={"/bookmark"}>Bookmark</Link> </li> */}
                    <li> <Link to={"/profile"}>{user.profile.name}</Link> </li>
                    {/* <img src={lofipfp} className="rounded-full h-10 w-10" /> */}
                    <li> <Link to={"/about"}>About</Link> </li>
                    <li> <Link to={"/login"} onClick={handleLogout}>Logout</Link> </li>
                </ul>

                <ul className={nav ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <AiOutlineClose onClick={handleNav} className='cursor-pointer' />

                    {/* <li> <Link to={"/main"}>Main</Link> </li> */}
                    <li> <Link to={"/"}>Home</Link> </li>
                    {/* <li> <Link to={"/bookmark"}>Bookmark</Link> </li> */}
                    <li> <Link to={"/profile"}>{user.profile.name}</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li>
                    <li> <Link to={"/login"} onClick={handleLogout}>Logout</Link> </li>
                </ul>
            </nav>

        </div>

    )
}

export default Navbar