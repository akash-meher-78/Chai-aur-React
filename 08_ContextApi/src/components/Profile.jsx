import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)


    if (!user) return <div className='mt-5 font-mono text-3xl text-red-200'>Please Login</div>
    return <div className='mt-5 font-mono text-3xl text-red-500'>Welcome {user.username}</div>


}

export default Profile