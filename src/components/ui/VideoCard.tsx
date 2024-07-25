import React from 'react'
import thumbnail from '../../assets/thumbnail.jpg'
import { AvatarUsed } from './avatarUsed'
import avatarUrl from "../../assets/react.svg"

const VideoCard = (key) => {
  return (
    <div  className='flex flex-col bg-black p-1 py-1  rounded-xl gap-1 '>
      <a href='' className='relative'>
        <img 
          src={thumbnail} 
          alt="" 
          className='rounded relative '
        />
      
        <div className='bg-black px-1 text-white  absolute bottom-1 rounded-[6px] bg-opacity-80 right-1'>
          11:11
        </div>
      </a>
      <div className='flex flex-cols gap-2'>
        <a href="" className='mt-2 ml-2' >
          <AvatarUsed className=' border border-gray-50 rounded-full w-6 h-6' imageSrc={avatarUrl}/>
        </a>
        <div className='flex flex-col pb-2'>
          <a href="" className='font-bold text-md text-white tracking-wide'>This is title</a>
          <a href="" className='text-gray-400 text-xs'>channnel name</a>
          <a href="" className='text-gray-400 text-xs'>views  •  durations</a>
        </div>
      </div>
    </div>
  )
}

export default VideoCard