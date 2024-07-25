import { AvatarUsed } from './ui/avatarUsed'
import logo from '../../public/vite.svg'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-cols bg-white opacity-80 justify-between items-center py-2 px-2 fixed w-full top-0 '>
        <div className='flex gap-6 items-center'>
            <AvatarUsed imageSrc={logo}/>

            <NavLink
                to="/"
                className={({ isActive }) =>
                `font-semibold text-gray-900 hover:text-purple-500 hover:underline cursor-pointer ${isActive ? 'text-purple-800 underline' : ''}`
                }
            >
                Videos
            </NavLink>
            
            <NavLink
                to="/tweets"
                className={({ isActive }) =>
                `font-semibold text-gray-900 hover:text-purple-500 hover:underline cursor-pointer ${isActive ? 'text-purple-800 underline' : ''}`
                }
            >
                Tweets
            </NavLink>

            <NavLink
                to="/subscriptions"
                className={({ isActive }) =>
                `font-semibold text-gray-900 hover:text-purple-500 hover:underline cursor-pointer ${isActive ? 'text-purple-800 underline' : ''}`
                }
            >
                Subscriptions
            </NavLink>

            <NavLink
                to="/playlists"
                className={({ isActive }) =>
                `font-semibold text-gray-900 hover:text-purple-500 hover:underline cursor-pointer ${isActive ? 'text-purple-800 underline' : ''}`
                }
            >
                Playlist
            </NavLink>
       </div>

       <div className='flex flex-cols items-center'>
            <div className='flex '>
                    <input  className='rounded-xl h-8 outline-purple-500 border border-purple-600 '/>
                    <button onClick={()=>console.log("searched")} className='pb-1.5'>
                        <label className='relative top-1 -inset-8 '><Search/></label>
                    </button>
            </div>
            <HoverCard>
                <HoverCardTrigger>
                    <AvatarUsed imageSrc={logo} className='w-6'/>
                    <HoverCardContent className='rounded-xl bg-slate-400  cursor-pointer'>
                        <p>Profile</p>
                        <Button variant="outline" >Logout</Button>
                    </HoverCardContent>
                </HoverCardTrigger>
            </HoverCard>

       </div>
    </div>
  )
}

export default Navbar