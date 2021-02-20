import { createSelector } from 'reselect'
import { handleChildren } from '../handleChildren'


const getCarouselState = state => state.carousel

export const carouselSelector = () => {
    return createSelector(
        getCarouselState,
        (_, name) => name,
        (state, name) => {

            const carousel = state[name]

            if(carousel === undefined) return {
                isLoaded: false
            }
            
          

            const {
                slides,
                index,
                direction,
                pageSize,
                isLoaded
            } = carousel
            
            const parseCarouseState = handleChildren({
                data: slides,
                index,
                slideDirection: direction,
                carouselPageSize: pageSize
            })

            console.log(parseCarouseState)

            return {
                isLoaded,
                ...parseCarouseState
            }

        }
    )
}