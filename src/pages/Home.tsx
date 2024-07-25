import Navbar from '../components/Navbar'
import VideoCard from '../components/ui/VideoCard'
import Container from '../Container'

const array = ["a","b","c","d", "e", "f","g","h","i","j","k","l","m","n","p","o","q","r","s","t"]

const Home = () => {
  
  return (
    <Container>
      <div className="flex flex-col ">
      
      <div className="grid gap-2  sm:grid-cols-4 mx-auto px-4    ">
      {array.map(array => (
        <div className='sm:col-span-1'><VideoCard key={array}/></div>
      ))}
    </div>
    </div>
    </Container>
      
  )
}

export default Home