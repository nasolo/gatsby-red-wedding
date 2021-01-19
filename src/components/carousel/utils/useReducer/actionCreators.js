import { handleChildren } from '../handleChildren'
import actions from './actions'

const {
    nextItem,
    prevItem,
    setActiveItem
} = actions

export const next = state => {

    if(state === undefined) return

    const { data, nextSlide, activeIndex } = state

    const payload = handleChildren({
        data,
        ...nextSlide
    })

    return nextItem(payload)
}


export const prev = state => {

    if(state === undefined) return

    const { data, previousSlide, activeIndex } = state

    const payload = handleChildren({
        data,
        ...previousSlide
    })

    return prevItem(payload)
}

export const setItem = (state, index) => {
    if(state === undefined) return
    const {
        data,
        activeIndex
    } = state

    const payload = handleChildren({
        data,
        index,
        direction: activeIndex < index ? 1 : -1
    })

    return setActiveItem(payload)
}