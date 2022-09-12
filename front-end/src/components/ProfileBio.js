import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ProfileBio = () => {

    const user = useSelector(state => state.user)

    //state that manages bio
    const [userBio, setUserBio] = useState('')

    //update user bio
    const updateBio = async () => {
        try {
            await axios.put('http://localhost:4000/api/users/', {
                bio: userBio
            }, { withCredentials: true })
            alert('Bio has updated!')
        } catch (err) {
            console.log(err)
            alert('Could not update bio!')
        }
    }

    //delete user account
    const deleteAccount = async () => {
        try {
            await axios.delete('http://localhost:4000/api/users/', {
                withCredentials: true
            })
            alert('Account has been deleted!')
        } catch (err) {
            console.log(err)
            alert('Could not delete account!')
        }
    }

    return (
        <div className='shadow-md rounded w-full p-4'>
            <div className='text-xl font-bold text-black'>
                Intro
            </div>

            <div className='mt-4 flex items-center'>
                <span className='ml-2'>Bio: {user.profile.bio} </span>
            </div>
            <div className='mt-4 flex items-center'>
                <span className='ml-2'>Followers: {user.profile.followers} </span>
            </div>
            <div className='mt-4 flex items-center'>
                <input placeholder='Update your bio' onChange={(e) => setUserBio(e.target.value)} />
            </div>
            <div className='mt-4 flex items-center'>
                <button className='ml-2 bg-slate-400 ' onClick={updateBio}>Update Bio</button>
            </div>
            <div className='mt-4 flex items-center'>
                <button className='ml-2 bg-red-500' onClick={deleteAccount}>Delete Account</button>
            </div>
        </div>
    )
}

export default ProfileBio