import React from 'react'

import { Chevron } from '../../../elements'
import { IndicatorWrapper, IndicatorContainer } from '../style'
import Indicator from './indicator';

export const Indicators = ({
    next, 
    prev, 
    setId, 
    slides, 
    activeId,
    
}) => {
    
const cheveronStyle = "lg:d-inline"

return (
        <IndicatorWrapper>
        
            <Chevron 
                type={"left"}
                onClick={() => prev()}
                className={`${cheveronStyle}`}
            />

            <IndicatorContainer>
                {slides && slides.map((slide, i) => {
                    let active = activeId === slide.id
                    return <Indicator 
                                key={`${i}-${slide.id}`} 
                                active={active}
                                onClick={() => setId(slide.id)}
                            />
                })}
            </IndicatorContainer>

            <Chevron 
                type={"right"}
                onClick={() => next()}
        />

        </IndicatorWrapper>
        
    )
}
