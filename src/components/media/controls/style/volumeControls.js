import { motion } from "framer-motion";
import styled from "styled-components"
import tw from 'twin.macro';

const visible = 'visible'
const hidden = 'hidden'


const volumeControlVariants = {
    [visible]:{
        opacity: 1,
        width: "100%",
        display: "flex",
        transition: { 
            delay: .3, 
            duration: .5, 
            type: "tween" 
        }
    },
    [hidden]: { 
        opacity: 0,
        width: "0%",
        transition:{ 
            duration: .5, 
            type: "tween" 
        },
        transitionEnd:{
            display: "none"
        } 
      
    }
}

export const VolumeControls = styled(motion.div).attrs(
    ({ expand, handleHoverEnd }) => ({
        className: `volume-controls`,
        onHoverEnd: () => handleHoverEnd(),
        variants: volumeControlVariants,
        initial: hidden,
        layout: true,
        animate: expand ? visible : hidden
    }))`
    ${
        tw`
            h-full
            m-auto
        `
    }    
`