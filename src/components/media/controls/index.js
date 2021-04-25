import React from 'react'
import { findDOMNode } from 'react-dom'
import { Icon } from '../../icon'
import Duration from './duration'
import { useCycle } from 'framer-motion';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { bindActions } from '../../videoPlayer/redux/actionCreators'
import { activeVideo } from '../../videoPlayer/redux/selectors'
import screenfull from 'screenfull';

import {
    ControlsWrapper,
    TimeDisplay,
    ProgressBarContainer,
    Seek,
    LeftControls,
    RightControls,
    Tools,
    VolumeControls
} from './style'


 const Controls = ({ player }) => {

    const [ expand, toggle ] = useCycle(false, true)
    const dispatch = useDispatch()

    const {
        duration, 
        played, 
        playing,
        muted,
        volume,
        fullscreen,
        quality,
        id
    } = useSelector( state => activeVideo( state ), shallowEqual )


    const {
        toggleFullscreen,
        handleVolumeChange,
        handleToggleMuted,
        handlePlayPause,
        handleSeekMouseDown,
        handleSeekChange,
        handleSeekMouseUp
      } = bindActions(dispatch)

    const handleMouseHoverEnd = () => expand === true && toggle()
    const handleMouseHoverEnter = () => expand === false && toggle()

    return(
        <ControlsWrapper>
            <LeftControls>
                <Icon
                    icon={`${playing ? "pause" : "rightChevron"}`} 
                    key={`${playing ? "play" : "pause"}"_btn"`} 
                    onClick={() => handlePlayPause(id)}
                />
                <TimeDisplay>
                    <Duration seconds={duration * played} key="start-time" className="start"/>
                    <Duration seconds={duration} key="end-time" className="end"/>
                </TimeDisplay>
            </LeftControls>
            <ProgressBarContainer >
                <Seek 
                    value={played}
                    onMouseDown={()=>handleSeekMouseDown(id)}
                    onChange={(e)=>handleSeekChange(e, id)}
                    onMouseUp={(e)=>handleSeekMouseUp(e, player, id)}
                />
            </ProgressBarContainer>
            <RightControls onMouseLeave={ handleMouseHoverEnd }>
                    <Icon 
                        icon='volume'
                        key="volume_btn"
                        onMouseEnter={ handleMouseHoverEnter }           
                    />
                <VolumeControls expand={expand} handleHoverEnd={handleMouseHoverEnd}>
                    <Seek
                        key="volume_handler"
                        width="100%"
                        min={0}
                        max={1}
                        value={volume}
                        onChange={(e)=>handleVolumeChange(e, id)}
                    />
                </VolumeControls>
                <Tools expand={expand}>
                    <Icon 
                        icon="expand"
                        onClick={() =>screenfull.request(findDOMNode(player))}
                    />
                     <Icon 
                        icon="tools"  
                        key="volume_btn"
                    />
                </Tools>
            </RightControls>
        </ControlsWrapper>
    )
}

export default Controls