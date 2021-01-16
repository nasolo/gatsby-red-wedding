import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'



export const Drag = styled(motion.div).attrs(props => ({
    className: 'drag-carousel',
    
    drag: "x",
    dragConstraints: {
        left: 0,
        right:0
    },
}))`

${
    tw`
        h-full
        absolute
        left-0
        
        
    `
}
`