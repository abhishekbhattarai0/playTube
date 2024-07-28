import { useContext } from 'react'
import VideoCard from '../components/ui/VideoCard'
import Container from '../Container'
import useFetchVideos from '../hooks/useFetchVideos'
import AuthContext from '../context/AuthProvider'


const Home = () => {
  const {auth } = useContext(AuthContext)
  const {videos} = useFetchVideos(auth.user._id)

  
  return (
    <Container>
      <div className="flex flex-col ">
      
      <div className="grid gap-2  sm:grid-cols-4 mx-auto px-4    ">
      {videos.map(video => (
        <div className='sm:col-span-1'><VideoCard
          videoFile={video.videoFile}
          thumbnail={video.thumbnail}
          duration={video.duration}
          views={video.views}
          createdAt={video.createdAt}
        /></div>
      ))}
    </div>
    </div>
    </Container>
      
  )
}

export default Home