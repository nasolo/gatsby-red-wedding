import React from 'react'
import IndicatorsWrapper from './style/indicatorWrapper'
import Indicator from './style/indicators'
import PropTypes from 'prop-types';






const Indicators = ({cards, activeIndex, handleIndicator}) => {

    return (
        <IndicatorsWrapper >
        {cards.map((card, index) => { 
            let active = activeIndex === index

            

                return (
                    <Indicator 
                        key={`${card.id}_${index}`} 
                        active={active}
                        onClick={()=>handleIndicator(card.id)}
                    />
                )
            })         
        }
    </IndicatorsWrapper>

    )
}

Indicators.propTypes = {
    cards: PropTypes.array.isRequired
  };

export default Indicators

