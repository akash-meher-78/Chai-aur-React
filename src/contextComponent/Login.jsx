import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSumbit = (e) =>{
        e.preventDefault()
        setUser({username, Password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input className='outline-black' type="text"
        value={username} onChange={(e) => setUsername(e.target.value)}
        placeholder='UserName'/>
        <input className='outline-black'  type="password" 
        value={Password} onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'/>
        <button onClick={handleSumbit}>Sumbit</button>
    </div>
  )
}

export default Login