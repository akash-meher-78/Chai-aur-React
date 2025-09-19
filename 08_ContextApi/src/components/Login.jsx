import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSumbit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  return (
    <div>
      <h2 className='text-center mt-4 mb-2 text-2xl font-mono'>Login</h2>
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}
        placeholder='Enter User Name'  className='border '/>
      {"  "}
      <input type="password" placeholder='Enter password'
        value={password} onChange={(e) => setPassword(e.target.value)} className='border'/>

      <button onClick={handleSumbit} className='px-2 py-2 text-2xl bg-green-600 border ml-2'>Sumbit</button>
    </div>
  )
}

export default Login