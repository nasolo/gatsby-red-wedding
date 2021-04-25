import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'

import { bindActions } from './redux/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPlayerProps } from './redux/selectors';
import { PlayerContainer } from './style';
import { Video } from './components/player';


export const VideoPlayer = ({url, id, poster, getRef}) => {

    
    const dispatch = useDispatch()
    const actions = bindActions(dispatch)
    const videoPlayerProps = useSelector(state=>getPlayerProps(state, id), shallowEqual)

    const shouldRenderVideo = url === undefined || id === undefined

    useEffect(
        () => {
            if(shouldRenderVideo) return
            const { load } = actions
            load(url, id)

        },[url, id])

    return <PlayerContainer>
                {videoPlayerProps === undefined
                ? "Render Spinner"
                : <Video config={videoPlayerProps} actions={actions} poster={poster} getRef={getRef} />

                }
            </PlayerContainer>
    
}


VideoPlayer.canPlay = ReactPlayer.canPlay

