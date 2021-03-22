import HANDLE from './constants'
import { createAction } from '@reduxjs/toolkit'

const load = createAction(HANDLE.LOAD, 
    (url, id, ref) =>({
        payload:{
            url,
            played: 0,
            loaded: 0,
            pip: false,
            id,
            ref
        }
    })
)

const handleVideoRef = createAction(HANDLE.SET_REF, 
    (id, ref) =>{

        console.log(ref)

        return {
            payload: {
                id,
                ref
            }
        }

    }
)

//play pause handle in reducer
const handlePlayPause = createAction(HANDLE.PLAY_PAUSE, 
    id =>({
       payload: {
           id
       }
    })
)

const handleStop = createAction(HANDLE.STOP, 
    id =>({
        payload: {
            url: null,
            playing: false,
            id
        }
    })
)


const handleLight = createAction(HANDLE.LIGHT, 
    (light, id) =>({
        payload: {
            light: light,
            id
        }
    })
)

//toggle loop in reducer
const handleToggleLoop =createAction(HANDLE.TOGGLE_LOOP, 
    id => ({
        payload:{
            id
        }
    })
)

const handleVolumeChange = createAction(HANDLE.VOLUME_CHANGE, 
    (e, id) =>({
        payload: {
            volume: parseFloat(e.target.value),
            id
        }
    })
)

//mute toggle is handled by the reducer
const handleToggleMuted = createAction(HANDLE.TOGGLE_MUTED, 
    id =>({
        payload: {
            id
        } 
    })
)

const handleSetPlaybackRate = createAction(HANDLE.SET_PLAY_BACK_RATE, 
    (e, id) =>({
        payload: {
            playbackRate: parseFloat(e.target.value),
            id
        }  
    })
)

//pip handled by reducer
const handleTogglePIP = createAction(HANDLE.TOGGLE_PIP, 
    id =>({
        payload: {
        id
        }
    })
)

const handlePlay = createAction(HANDLE.PLAY, 
    id =>({
        payload: {
            playing: true,
            id
        }
    })
)

const handleEnablePIP = createAction(HANDLE.PIP, 
    id =>({
        payload: {
            pip: true,
            id
        }
    })
)

const handleDisablePIP = createAction(HANDLE.DISABLE_PIP, 
    id =>({
        payload: { 
            pip: false,
            id 
        } 
    })
)

const handlePause = createAction(HANDLE.PAUSE, 
    id =>({
        payload: {
            playing: false,
            id
        }
    })
)

const handleSeekMouseDown = createAction(HANDLE.SEEKMOUSE_DOWN, 
    (e, id) =>({
        payload: {
            seeking: true,
            id
        }
    })
)

const handleSeekChange = createAction(HANDLE.SEEK_CHANGE, 
    (e, id) =>({
        payload: { 
            played: parseFloat(e.target.value),
            id
        }
    })
)

const handleSeekMouseUp = createAction(HANDLE.SEEK_MOUSEUP, 
    (e, player, id) =>{
        player.seekTo(parseFloat(e.target.value))
        return {
            payload: {
                seeking: false,
                id
            }
    }

})

const handleProgress = createAction(HANDLE.PROGRESS, 
    (id, { played }) =>({
        payload:{
            played,
            id
        }    
    })  
)

///set state.loop in reducer
const handleEnded = createAction(HANDLE.ENDED, 
    id =>({
        payload: {
          id
        }
    })
)

const handleDuration = createAction(HANDLE.ENDED, 
    (id, duration) =>({
        payload: {
            duration,
            id
        }
    })
)

const toggleFullscreen = createAction(HANDLE.FULLSCREEN, 
    (id, fullscreen) =>({
        payload: {
            id,
            fullscreen,
            controls: fullscreen
        }
    })
)

const allActions = {
    toggleFullscreen,
    handleDuration,
    handleEnded,
    handleProgress,
    handleSeekMouseUp,
    handleSeekChange,
    handleSeekMouseDown,
    handlePause,
    handleDisablePIP,
    handleEnablePIP,
    handleTogglePIP,
    handlePlay,
    handleSetPlaybackRate,
    handleToggleMuted,
    handleVolumeChange,
    handleToggleLoop,
    handleLight,
    handleStop,
    handlePlayPause,
    load,
    handleVideoRef
}


export default allActions