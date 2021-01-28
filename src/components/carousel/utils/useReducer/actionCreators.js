import { handleChildren } from '../handleChildren'
import actions from './actions'

const {
    nextItem,
    prevItem,
    setActiveItem
} = actions

export const next = state => {

    if(state === undefined) return

    const { data, nextSlide } = state

    const payload = handleChildren({
        data,
        ...nextSlide
    })

    return nextItem(payload)
}


export const prev = state => {

    if(state === undefined) return

    const { data, previousSlide } = state

    const payload = handleChildren({
        data,
        ...previousSlide
    })

    return prevItem(payload)
}

export const setItem = (state, id) => {
    if(state === undefined) return
    const {
        data,
        activeIndex
    } = state

    const componentProps = data.map(item => item.props)

    if(componentProps.length < 1) return

    if(id){

        const activeItemIndex = componentProps.findIndex(item => item.id === id)

        if(activeItemIndex !== activeIndex) {

            const payload = handleChildren({
                data,
                index: activeItemIndex,
                direction: activeIndex < activeItemIndex ? 1 : -1
            })
    
            return setActiveItem(payload)
        }

    }

}