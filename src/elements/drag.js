import { motion } from 'framer-motion'
import styled from 'styled-components'

const x = {
    left: 0,
    right: 0
}

const y = {
    top: 0,
    bottom: 0
}

export const Drag = styled.div.attrs(props => ({
    className: 'drag',
    as: motion.div,
    drag: props.drag ? props.drag : "x",
    dragConstraints: props.drag === "y" ? y : x
}))`

width: 100%;
height: 100%;
position: absolute;

`