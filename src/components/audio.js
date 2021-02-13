import React from 'react'



const Audio = () => {
  return (
    <audio
    autoPlay="autoPlay"
    loop
    src="https://lab.hengpatrick.fr/codevember-assets/subaqueous.mp3" 
    type="audio/mpeg"
    controls
    hidden
  ></audio>
  )
}

export default Audio 