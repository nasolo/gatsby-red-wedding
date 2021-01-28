import React from 'react'
import IndicatorsWrapper from './style/indicatorWrapper'
import Indicator from './style/indicators'





const Indicators = ({cards, activeIndex, handleIndicator}) => {

    return (
        <IndicatorsWrapper >
        {cards.map((card, index) => { 
            let active = activeIndex === index
                return (
                    <Indicator 
                        key={`${card.id}_${index}`} 
                        active={active}
                        onClick={()=>handleIndicator(index)}
                    />
                )
            })         
        }
    </IndicatorsWrapper>

    )
}

export default Indicators