import React, { useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import PropTypes from 'prop-types';

import { CarouselContainer } from './style'
import { carouselVariants } from './style/variants'
import { carouselSelector } from './utils/redux/selectors'
import { bindedActions } from './utils/redux/actionCreators'
import { Drag } from '../../elements';
import handleOnDragEnd from './utils/handleOnDragEnd';


export const Carousel = ({
    children,
    name = "carousel",
    pageSize = 9,
    exitBeforeEnter = false,
}) => {

    //store selector in memo for reuse
    const makeGetAllCarouselData = useMemo(carouselSelector, [])

    //redux dispatch
    const dispatch = useDispatch()

    //bind all actions
    const {
        next,
        prev,
        load
    } = bindedActions(dispatch)


   //if children exits convert them to an Array
    const reactChildrenArray = React.Children.toArray(children)
    const childrenProps = reactChildrenArray.map(data => data.props)
    

    
    //selector allCarouselData
    const {
        isLoaded,
        activeIndex,
        nextSlide,
        previousSlide,
        direction
    } = useSelector(state => makeGetAllCarouselData(state, name), shallowEqual)


    useEffect(() => {

        //validate if the carousel is loaded by name
        if(!isLoaded) load({
            name,
            isLoaded: true,
            slides: [...childrenProps]
        })
        
    },[isLoaded])


    const handleDrag = (event, info) => handleOnDragEnd({
        event,
        info,
        next: () => next({name, isLoaded, slides: childrenProps, ...nextSlide}),
        prev: () => prev({name, isLoaded, slides: childrenProps, ...previousSlide})
    })

    const renderSlide = (index) => {

        const activeSlide = reactChildrenArray[index]

        const shouldRenderSlide = activeSlide === undefined

        const errorSlide = <div>There is an error</div>

        return shouldRenderSlide ? errorSlide : activeSlide
    }

    console.log(nextSlide, previousSlide)

    return (
       <CarouselContainer>
             <AnimatePresence custom={activeIndex} initial={false} exitBeforeEnter={exitBeforeEnter}>
                 <Drag
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    key={activeIndex}
                    onDragEnd={handleDrag}
                 >
                    {renderSlide(activeIndex)}
                </Drag>
           </AnimatePresence>
       </CarouselContainer>
    )
}


Carousel.propTypes = {
    children: PropTypes.isRequired,
    name: PropTypes.string.isRequired
}