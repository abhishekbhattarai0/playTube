import React, { useState } from 'react'
import Container from '../Container'






const VideoPlayerPage = () => {
  return (
    <Container>
        <div className=''>
          <video width="1080" height="720" controls muted autoPlay >
            <source src=""/>
          </video>
        </div>
    </Container>
  )
}

export default VideoPlayerPage