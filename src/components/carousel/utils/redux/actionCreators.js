import { nextItem, prevItem, setActiveItem, load } from './actions'
import { bindActionCreators } from 'redux'


export const bindedActions = dispatch => {

    if(dispatch === undefined) return {
        nextItem,
        prevItem,
        load,
        setActiveItem
    }

    const boundActionCreators =  bindActionCreators({
        next: nextItem,
        prev: prevItem,
        load,
        setItem: setActiveItem
    }, dispatch)

    return boundActionCreators
}
