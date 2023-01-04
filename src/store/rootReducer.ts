import { combineReducers } from 'redux'
import beersReducer from './beers/reducer'

const rootReducer = combineReducers({
  beers: beersReducer,
})

export default rootReducer
