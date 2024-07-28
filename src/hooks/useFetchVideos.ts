import React, { useContext, useEffect, useState } from 'react'
import axios from '../api/axios'
import AuthContext from '../context/AuthProvider'

const useFetchVideos = (userId) => {
    const {auth} = useContext(AuthContext)
    const [videos, setVideos] = useState([])
    
    useEffect(()=> {
        const run = async() => {
            try {
                const data = await axios.get(
                    `/api/v1/videos/${userId}`,
                    {
                        headers: { Authorization: `Bearer ${auth.accessToken}` }
                      }
                )
                setVideos(data.data.data)
                console.log(data.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        run()
    },[userId])
  return (
    {videos}
  )
}

export default useFetchVideos