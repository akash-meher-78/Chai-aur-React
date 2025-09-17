import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/akash-meher-78')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 rounded">
            <h2 className="text-lg font-bold">Github Followers: {data.followers}</h2>
            <img src={data.avatar_url} alt="" className="w-32 h-32 mx-auto rounded mt-2" />
        </div>
    )
}

export default Github


export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/akash-meher-78')
    return response.json()
}