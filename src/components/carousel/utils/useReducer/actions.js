import carouselConstants from './constants'

const {
    PAGINATE_NEXT,
    PAGINATE_PREV,
    SETACTIVEITEM,
} = carouselConstants

 const actions = {
    nextItem: ( payload ) => ({
        type: PAGINATE_NEXT,
        payload
    }),
    prevItem: ( payload ) => ({
        type: PAGINATE_PREV,
        payload
    }),
    setActiveItem: ( payload ) => ({
        type: SETACTIVEITEM,
        payload
    })
}

export default actions