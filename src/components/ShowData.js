import React, { useState } from 'react'

const ShowData = () => {
    const localData = localStorage.getItem("data")
    // const [data, setData] = useState(JSON.parse(localData))

  return (
    <div>
    <h1>Display Data</h1>
    {/* <p>Email: {data[0]?.email}</p>
    <p>Password: {data[0]?.password}</p> */}
    </div>
  )
}

export default ShowData