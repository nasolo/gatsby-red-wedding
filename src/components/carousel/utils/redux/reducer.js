import { createReducer } from '@reduxjs/toolkit'
import { nextItem,  prevItem, setActiveItem, load } from './actions'

const INITSTATE = { 
    slides: [],
    index: 0,
    direction: 1,
    pageSize: 9,
    isLoaded: false
}

const carouselReducer = createReducer(INITSTATE, {
    [nextItem]: ( state, action ) => ({
        ...state,
        ...action.payload
    }),
    [prevItem]: ( state, action ) => ({
        ...state,
        ...action.payload
    }),
    [load]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [setActiveItem]: ( state, action ) => ({
        ...state,
        ...action.payload
    })
})

const carousel = createReducer(INITSTATE, builder => {
    builder
        .addCase(nextItem, (state, action) =>{
            state[action.payload.name] = carouselReducer(state[action.name], action)
        })
        .addCase(prevItem, (state, action) =>{
            state[action.payload.name] = carouselReducer(state[action.name], action)
        })
        .addCase(setActiveItem, (state, action) =>{
            state[action.payload.name] = carouselReducer(state[action.name], action)
        })
        .addCase(load, (state, action) => {
            state[action.payload.name] = carouselReducer(state[action.name], action)
        })
        .addDefaultCase(state => state)
})

export default carousel