import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Sachinsh72')
     .then(response => response.json())
     .then(data => {
        // console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className=' m-4 p-4 text-3xl flex justify-center flex-col items-center gap-5 w-full'>Github Username: {data.login}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github