import allActions from './actions'
import { bindActionCreators } from 'redux'

export const bindActions = dispatch => {

    if(dispatch === undefined) return allActions

    const bindedActions = bindActionCreators({
        ...allActions
    }, dispatch)

    return bindedActions
}
