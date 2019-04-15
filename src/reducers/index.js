import { combineReducers } from 'redux'
// Import other reducers here
import homeReducer from './homeReducer/homeReducer'

const rootReducer = combineReducers({
// Add all reducers here
home:homeReducer,
})

export default rootReducer;