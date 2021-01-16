import carouselConstants from './constants'



const carouselReducer = (state, action) => {

    switch(action.type){
        case carouselConstants.PAGINATE_NEXT:
            return {
                ...state,
              ...action.payload
            }
        case carouselConstants.PAGINATE_PREV:
            return {
                ...state,
                ...action.payload
            }
        case carouselConstants.SETACTIVEITEM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export default carouselReducer