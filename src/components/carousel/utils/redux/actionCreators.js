import { nextItem, prevItem, setActiveItem, load, setFilterTags, resetFilterTags } from './actions'
import { bindActionCreators } from 'redux'


export const bindedActions = dispatch => {

    if(dispatch === undefined) return {
        nextItem,
        prevItem,
        load,
        setActiveItem,
        setFilterTags,
        resetFilterTags
    }

    const boundActionCreators =  bindActionCreators({
        next: nextItem,
        prev: prevItem,
        load,
        setItem: setActiveItem,
        addTags: setFilterTags,
        resetTags: resetFilterTags
    }, dispatch)

    return boundActionCreators
}


export const handleControls = ({name, id, type}) => {
    if(name === undefined) return 

    return (dispatch, getState) => {
        const { next, prev, setItem } = bindedActions(dispatch)

        const sliderState = (name) => {
            const { carousel } = getState()
            const state = carousel[name]
            return state === undefined ? carousel : state
        }

        const { data, nextSlide, previousSlide } = sliderState(name)

        if(id) {
            const itemIndex = data && data.findIndex(item => item.id && item.id === id)
            return setItem({
                name,
                itemIndex
            })
        }

        if(type.toLowerCase()){
            switch(type){
                case 'next':
                    return dispatch(next({
                        name,
                        ...nextSlide
                    }))
                case 'prev':
                    return dispatch(prev({
                        name,
                        ...previousSlide
                    })) 
            }
        }
        
    }
}