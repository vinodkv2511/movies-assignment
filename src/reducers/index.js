import { combineReducers } from 'redux'
// Import other reducers here
import homeReducer from './homeReducer/homeReducer'
import movieDetailsReducer from './movieReducer/movieReducer';
import castReducer from './castReducer/castReducer'

const rootReducer = combineReducers({
// Add all reducers here
home:homeReducer,
movie:movieDetailsReducer,
cast: castReducer
})

export default rootReducer;