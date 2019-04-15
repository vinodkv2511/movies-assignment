import consts, {action_constants} from '../../constants'

const initialState = {
    activeTab: consts.tabs.POPULAR,
}
const homeReducer = (state= initialState, action) => {
    let newState = {}
    switch (action.type) {
        case action_constants.CHANGE_TAB:
            newState = {...state}
            newState.activeTab = action.payload
            break
        case action_constants.SEARCH:
            newState = state
            break   
        default:
            newState = state
            break
    }
return newState;
}

export default homeReducer;