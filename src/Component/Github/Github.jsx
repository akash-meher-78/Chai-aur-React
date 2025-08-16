import React, { use, useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/user/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[] )
  return (
    <div className='text-center m-4 text-3xl font-mono'>Github: {data.followers}</div>
  )
}

export default Github