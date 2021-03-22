import React, { useEffect, useRef } from 'react'
import PlayerWrapper from '../style'
import ReactPlayer from 'react-player'

export const Video = ({config, actions, poster, player}) => {

    const ref = useRef(null)

    const { id, url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = config
    const {handlePlay,  handleEnablePIP, handleDisablePIP, handlePause, handleEnded, handleProgress, handleDuration, handlePlayPause} = actions
    
    useEffect(()=>{

      const { current } = ref

      const shouldUpdateRef = typeof player === 'function' && current

      if(!shouldUpdateRef){
        return ref
      } else{
        return player(id, current)
      }
    },[ref, player])
  
    
  
  return (
          <ReactPlayer
              className="react-player"
              key={id}
              wrapper={PlayerWrapper}
              ref={ref}
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
  