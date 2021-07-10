import styled from "styled-components"
import { motion } from "framer-motion"
import tw from "twin.macro"


export const Wrapper = styled.div.attrs({

    as: motion.div,
    className: "player-btn-wrapper"
})`


    ${tw`

        m-auto
        h-full
        w-full
        z-50
        self-center
        absolute
        bg-opacity-0
    
    `}

    max-height: 12rem;
    max-width: 12rem;
`


export const PlayContainer = styled.div.attrs({
    className: "playBtn-container"
})`

    ${tw`
        
        h-full
        w-full
        rounded-full
        flex
        items-center
        justify-center
    
    `}

`

export const PlayIcon = styled.div.attrs({
    className: "react-player__play-icon"
})`

    border-style: solid;
    border-width: 16px 0px 16px 26px;
    border-color: transparent transparent transparent white;
    margin-left: 7px;

`