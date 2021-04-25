import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import tw from 'twin.macro'



const hide = "hide"
const show = "show"

const transition = {
   
    type: "spring",
    bounce: 0
}

const variants = {
    hide: {
        height: "3rem",
        transition
    },
    show: {
        height: "100%",
        transition
    }
}

const twStyle = tw`

    block
    absolute
    w-full
    flex
    flex-col
    z-20
    bottom-0
    max-h-60
`

const lgStyle = tw`

    lg:hidden


`
const bgColor = themeGet('colors.greys.13', 'gainsboro')

export const MobileFooter = styled(motion.div).attrs(props =>({
    className: `mobile-footer`,
    animate: props.active ? show : hide,
    variants: variants,
    initial: false,
}))`

    ${twStyle};
    ${lgStyle};

    background-color: ${bgColor};

`