import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ProfileBio = () => {

    const user = useSelector(state => state.user)
    const id = user.profile.id
    console.log(user)

    //state that manages bio
    const [userBio, setUserBio] = useState('')
    console.log(userBio)

    //update user bio
    const updateBio = async () => {
        let token = localStorage.getItem('jwt')
        try {
            const res = await axios.patch(`http://localhost:3001/users/${id}`, {
                bio: userBio
            }, {
                headers:{
                    jwt: token
                }
            })
            setUserBio(userBio.map((item) => {
                if( item.id === res.data.id){
                    return res.data
                }
                else {
                    return item
                }
            }))
        } catch (err) {
            console.log(err)
            alert('Could not update bio!')
        }
    }

    //delete user account
    const deleteAccount = async () => {
        try {
            await axios.delete(`http://localhost:3001/users/`)
            alert('Account has been deleted!')
        } catch (err) {
            console.log(err)
            alert('Could not delete account!')
        }
    }

    return (
        <div className='shadow-md rounded w-full p-4 border-solid bg-white border-2 border-sky-500'>
            <div className='text-xl font-bold text-black'>
                Intro
            </div>

            <div className='mt-4 flex items-center'>
                <span className='ml-2'>Bio: {user.profile.bio} </span>
            </div>
            <div className='mt-4 flex items-center'>
                <span className='ml-2'>Location: {user.profile.location} </span>
            </div>
            {/* <div className='mt-4 flex items-center'>
                <span className='ml-2'>Followers: {user.profile.followers} </span>
            </div> */}
            <div className='mt-4 flex items-center'>
                <input className='shadow appearance-none border rounded w-full' placeholder='Update your bio' onChange={(e) => setUserBio(e.target.value)} />
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