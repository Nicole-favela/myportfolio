import ReactPlayer from 'react-player'
import spotifyvid from '../assets/spotify_clone_demo_final.MP4'
import spotifythumbnail from '../assets/thumbnail.png'
 import React from 'react'
 import './PlayerStyles.css'
 
 function Player() {
   return (
     <div className='player-wrapper'>   
    <ReactPlayer
    //  light={<img src={spotifythumbnail} alt='Thumbnail' />}
     playing
     controls = 'true'
     volume = '1'
     className='react-player'
     url={spotifyvid}
     width='100%'
     height='100%'
     // config={{
     //   file: {
     //     attributes: { src: './assets/spotify_clone_demo_final.MP4' ,type: "video/MP4"}
     //   },
     
// }}
/>
</div>
   )
 }
 
 export default Player