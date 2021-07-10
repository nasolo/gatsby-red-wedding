import { createReducer, current } from '@reduxjs/toolkit'
import { nextItem,  prevItem, setActiveItem, load, setFilterTags, resetFilterTags } from './actions'
import { handleChildren } from '../handleChildren'

const INITSTATE = { 
    slides: [],
    index: 0,
    direction: 1,
    pageSize: 9,
    isLoaded: false,
    filters: []
}

const handleState = (state, action) => {

    if(action.payload.name === undefined) return {
        isLoaded: false
    }

    const { payload: { name } } = action
    const currentState = current(state[name])

    const newState = {
        ...currentState,
        ...handleChildren({
            data: currentState.data,
            ...action.payload
        })
    }

    return newState

}

const carouselReducer = createReducer(INITSTATE, {
    [nextItem]: ( state, action ) => {

        return handleState(state, action)
    },
    [prevItem]: ( state, action ) => {

        return handleState(state, action)
    },
    [load]: (state, action) => ({
        name: action.payload.name,
        isLoaded: action.payload.isLoaded,
        ...handleChildren({
            data: action.payload.slides,
            index: state.index,
            pageSize: action.payload.pageSize === undefined ? state.pageSize : action.payload.pageSize,
            slideDirection: state.direction
        })
    }),
    [setActiveItem]: ( state, action ) => {

        const { payload: { name, index }} = action
        const currentState = current(state[name])

        const { data, activeIndex } = currentState
       

        return {
            ...currentState,
            ...handleChildren({
                name,
                data,
                index,
                slideDirection: index > activeIndex ? 1 : -1
            })
        }

        
    },
    [setFilterTags]: (state, action) => {

        const { payload: { name, filters }} = action
        const currentState = current(state[name])

        return {
            ...currentState,
            filters
        }
    },
    [resetFilterTags]: (state, action) => {

        const { payload: { name } } = action
        const currentState = current(state[name])

        return {
            ...currentState,
            filters: []
        }
    }
}
)

const carousel = createReducer(INITSTATE, builder => {
    builder
        .addCase(nextItem, (state, action) =>{
            state[action.payload.name] = carouselReducer(state, action)
        })
        .addCase(prevItem, (state, action) =>{
            
            state[action.payload.name] = carouselReducer(state, action)
        })
        .addCase(setActiveItem, (state, action) =>{
            
            state[action.payload.name] = carouselReducer(state, action)
        })
        .addCase(load, (state, action) => {
            state[action.payload.name] = carouselReducer(state, action)
        })
        .addDefaultCase(state => state)
})

export default carousel