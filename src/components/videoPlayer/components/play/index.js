import React from 'react'
import { Wrapper, PlayContainer, PlayIcon } from './style'

const playBtnVariants = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}


const PlayButton = ({playing, onClick}) => (

    <Wrapper
        onClick={onClick}
        initial="initial"
        animate={playing ? "exit" : "enter"}
        exit="exit"
        variants={playBtnVariants}
        whileHover={{cursor: 'pointer'}}
    >
        <PlayContainer>
            <PlayIcon/>
        </PlayContainer>
    </Wrapper>
)

export default PlayButton