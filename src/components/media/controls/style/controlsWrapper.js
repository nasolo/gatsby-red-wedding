import { motion } from "framer-motion"
import styled from "styled-components"
import tw from 'twin.macro'


const hide = "hide"
const show = "show"

const variants = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1
    }
}

const twinMacroStyle = tw`

    text-left
    flex
    flex-nowrap
    h-full
    w-full
    bg-transparent
    items-center
    justify-between
    z-40
    text-white
    

`

const iconStyle = tw`
    fill-current
    text-white
    border-l-2
    border-dotted
    pl-2
    h-3
    cursor-pointer
`
const spacing = tw`pr-2`


const playBtnStyle = tw`border-l-0 border-r-2`

export const ControlsWrapper = styled(motion.div).attrs(({ playing }) =>({
    className: `video-controls-wrapper`,
    animate: playing ? hide : show,
    variants: variants,
    initial: false,

}))`

    ${ twinMacroStyle }

    .icon {
        ${ iconStyle }
    }

    .rightChevron, .icon{
        ${ spacing }
    }

    .rightChevron {
        ${ playBtnStyle }
    }
    .tools {
        padding-right: 0;
    }

`

