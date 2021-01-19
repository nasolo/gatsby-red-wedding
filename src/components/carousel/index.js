import { Drag, carouselVariants } from './style'
import React, { useReducer } from 'react'
import { handleChildren } from './utils/handleChildren'
import carouselReducer from './utils/useReducer/reducer'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import handleOnDragEnd from './utils/handleOnDragEnd'
import { next, prev } from './utils/useReducer/actionCreators'
import { motion } from 'framer-motion'
export const Carousel = ({
    children
}) => {

    // Check if children was past to carousel
    const childrenExit = React.Children.count( children ) > 0

    //if children exits convert them to an Array
    const reactChildrenArray = React.Children.toArray(children)

    //set React useReducer INIT state
    const INITSTATE = { 
        data: reactChildrenArray,
        index: 1
    }

    //initialize useReducer initial state
    const [state, dispatch] = useReducer(carouselReducer, INITSTATE, handleChildren)

    //map carousel state data
    const {
        activeSlide,
        direction,
        activeIndex,
    } = state

     //if no react children were passed to carousel return error!
     if(!childrenExit) return <div> No react objects were passed to this carousel</div>
    

    // check if child node exists before render
     const shouldRenderComponent = reactChildrenArray[activeIndex] === undefined

    const renderComponent = () => {
        return (
            !shouldRenderComponent && activeSlide
        )
    }

    return (
        
        <AnimatePresence custom={direction} initial={false} exitBeforeEnter={false}>
            <Drag
                initial="enter" 
                animate="center"
                exit="exit"
                custom={direction}
                variants={carouselVariants}
                key={`drag-${activeIndex}`}
                onDragEnd={(event, info) => handleOnDragEnd({
                    event,
                    info,
                    next: () => next(state),
                    prev: () => prev(state),
                    dispatch
                })}
            >
                {renderComponent()}
            </Drag>
        </AnimatePresence>
        
    )
}