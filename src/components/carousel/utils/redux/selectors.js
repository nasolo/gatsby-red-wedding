import { createSelector } from 'reselect'

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
            
            return {
                ...carousel
            }

        }
    )
}