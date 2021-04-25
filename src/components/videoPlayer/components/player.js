import React, { useEffect } from 'react'
import PlayerWrapper from '../style'
import ReactPlayer from 'react-player'

export const Video = ({config, actions, poster, getRef}) => {


    const { id, url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = config
    const {handlePlay,  handleEnablePIP, handleDisablePIP, handlePause, handleEnded, handleProgress, handleDuration, handlePlayPause} = actions
    
  
  return (
          <ReactPlayer
              className="react-player"
              key={id}
              wrapper={PlayerWrapper}
              ref={getRef}
              url={url}
              playing={playing}
              controls={controls}
              light={poster ? poster : light}
              volume={volume}
              muted={muted}
              loop={loop}
              played={played}
              loaded={loaded}
              dureation={duration}
              playbackRate={playbackRate}
              pip={pip}
              onReady={()=> console.log('onReady')}
              onStart={()=> console.log('onStart')}
              onPlay={()=>handlePlay(id)}
              onEnablePIP={()=>handleEnablePIP(id)}
              onDisablePIP={()=>handleDisablePIP(id)}
              onPause={()=>handlePause(id)}
              onBuffer={()=> console.log('on buffer')}
              onSeek={(e)=>console.log('onSeek', e)}
              onEnded={()=>handleEnded(id)}
              onError={e => console.log('onError',e)}
              onProgress={(progress)=>handleProgress(id, progress)}
              onDuration={(duration)=>handleDuration(id, duration)}
              onClick={()=>handlePlayPause(id)}
          />
    )
  }
  