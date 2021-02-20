import { Drag, carouselVariants, CarouselContainer } from './style'
import React, { useMemo, useReducer } from 'react'
import { handleChildren } from './utils/handleChildren'
import carouselReducer from './utils/useReducer/reducer'
import { AnimatePresence } from 'framer-motion'
import handleOnDragEnd from './utils/handleOnDragEnd'
import { next, prev, setItem } from './utils/useReducer/actionCreators'





export const Carousel = ({
    children,
    controls
  
}) => {

    // Check if children was past to carousel
    const childrenExit = React.Children.count( children ) > 0

    //if children exits convert them to an Array
    const reactChildrenArray = React.Children.toArray(children)

    //set React useReducer INIT state
    const INITSTATE = { 
        data: reactChildrenArray,
        index: 0
    }

    //initialize useReducer initial state
    const [state, dispatch] = useReducer(carouselReducer, INITSTATE, handleChildren)

    //map carousel state data
    const {
        activeSlide,
        direction,
        activeIndex,
    } = state

    const carouselState = useMemo(
        ()=>({
            ...state,
            next: () => dispatch(next(state)),
            prev: () => dispatch(prev(state)),
            setSlide: (index) => dispatch(setItem(state, index))
        }),[activeIndex])

    //handle carousel controls

    if(controls) {
        return  controls(carouselState)
    }

    
     //if no react children were passed to carousel return error!
     if(!childrenExit) return <div> No react objects were passed to this carousel</div>


    return (
       <CarouselContainer>
            <AnimatePresence custom={activeIndex} initial={false} exitBeforeEnter={false}>
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
                    {activeSlide}
                </Drag>
            </AnimatePresence>
        </CarouselContainer>
        
    )
}