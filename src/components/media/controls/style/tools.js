import { motion } from "framer-motion"
import styled from "styled-components"
import tw from 'twin.macro'


const visibile = 'visible'
const hidden = 'hidden'

const toolsVariants = {
    visible:{
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
}


export const Tools = styled(motion.div).attrs(({ expand }) => ({
    className: "tools-controls",
    variants: toolsVariants,
    initial: visibile,
    animate: `${expand ? hidden : visibile}`
}))`

    ${
        tw`
            flex-1
            overflow-hidden
            flex
            justify-start
        `
    }

`