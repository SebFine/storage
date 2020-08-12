import {combineReducers} from 'redux'
import user from './userReducers'
import articles from './articlesReducer'

export default combineReducers({user, articles})
