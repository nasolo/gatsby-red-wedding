import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const variants = {
    open: {
        opacity: 1,
        transitionEnd: { display: "inline" }
    },
    close: {
        opacity: 0,
        transitionEnd: { display: "none" }
    }
}


export const FooterButtonWrapper = styled(motion.div).attrs({
    animate: ({ active }) => active ? "close" : "open",
    variants: variants,
    initial: "false"
})`

   ${tw`
       absolute
        top-0
        w-full
    `
   };


`