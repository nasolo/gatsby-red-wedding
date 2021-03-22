import allActions from './actions'
import { createReducer, createNextState, current } from '@reduxjs/toolkit'



const {
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
        handleVideoRef,
        toggleFullscreen
} = allActions


const INIT_STATE = {
        url: null,
        ref: null,
        pip: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        playing: false,
        seeking: false,
        id: null,
        fullscreen: false,
        quality:[
          1080,
          720,
          480,
          360,
          240,
          144
        ]
    }

const videoPlayer = createReducer(INIT_STATE, {
        [load]: (state, action)=>({
                ...state,
                ...action.payload    
        }),
        [handleVideoRef]: (state, action) => ({
            ...state,
            ...action.payload
        }),
        [handlePlayPause]: (state)=>{
            return{
                ...state,
                playing: !state.playing
           }
        },
        [handleStop]: (state, action) => { 
            return{
                ...state,
                ...action.payload
            }
        },
         [handleLight]: (state, action)=>{
                 return {
                     ...state,
                     ...action.payload
                 }
         },
         [handleToggleLoop]: (state)=>{
             return {
                 ...state,
                 loop: !state.loop
                 
             }
         },
         [handleVolumeChange]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleToggleMuted]: (state)=>{
            return {
                ...state,
                muted: !state.muted
            }
         },
        [handleSetPlaybackRate]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
         },
        [handleTogglePIP]:(state) =>{
            return {
                ...state,
                pip: !state.pip
            }
         },
        [handlePlay]:(state, action)=>{

             return {
                 ...state,
                 ...action.payload
             }
         },
        [handleEnablePIP]:(state, action)=>{
             return {
                 ...state,
                 ...action.payload
             }
         },
        [handleDisablePIP]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handlePause]:(state, action) =>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekMouseDown]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekChange]:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleSeekMouseUp]: (state, action) =>{
            return {
                ...state,
                ...action.payload
            }
        },
        [handleProgress]: (state, action)=>{
         
            
            return !state.seeking && {
                        ...state,
                        ...action.payload
                    } 

        },
        [handleEnded]: (state, action)=>{
            return {
                ...state,
                playing: state.loop
            }
        },
        [handleDuration]: (state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        },
        [toggleFullscreen]: (state, action) =>({
            ...state,
            ...action.payload
        })
})

const initState = {
    urls: [],
    ids: [],
    loaded: 0,
    activeVideo: {}
}

const videoReducer = createReducer(initState, builder => {
    builder
        .addCase(load, createNextState(
            (video, action)=>{
                
                //extract id from actions to filter reducers
                const { id } = action.payload
    
                //map state for reducer keys will be used to validate if keys exist
                const reducers = Object.keys(video)
    
                //initiate keys to add for cleanup
                let keysToAdd = []
    
                //valide if id exist is action payload if yes push keys to add
                 if(!id){
                     return video
                 } else {
                    keysToAdd.push(id)
                 }
    
                 //map over keys and check and add reducers that does not exist
                 keysToAdd.forEach(key => {
                    video[key] = reducers[key] ? video[key] : videoPlayer(video[key],action)
                });
                

                video.activeVideo = video[id]
             
    
                video.loaded = video.urls.length
    
                return video
            })
        ).addCase(handleVideoRef, createNextState(
            (state, action) => {
            
            const { activeVideo } = current(state)
            const { payload: { ref } } = action
            
            state['activeVideo'] = {
                ...activeVideo,
                ref
            }

        }))
        .addMatcher(
            action => action.type.endsWith('VIDEO'),
            createNextState(
                (video, action) =>{
                    
                    if(!action || !action.payload.id) return video

                    const id = action.payload.id
    
                    video[id] = videoPlayer(video[id], action)
    
                    return video
            })
        )
})
    

export default videoReducer