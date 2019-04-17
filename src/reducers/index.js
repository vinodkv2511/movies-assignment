import { combineReducers } from 'redux'
// Import other reducers here
import homeReducer from './homeReducer/homeReducer'
import movieDetailsReducer from './movieReducer/movieReducer';

const rootReducer = combineReducers({
// Add all reducers here
home:homeReducer,
movie:movieDetailsReducer
})

export default rootReducer;