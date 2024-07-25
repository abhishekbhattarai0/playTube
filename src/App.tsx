import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"



import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"



function App() {
  return (
    <div className="flex">
      <div className="z-10">
        <Navbar />
      </div>
      <Outlet/>
    </div>
  )
}

export default App
