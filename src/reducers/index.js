import { combineReducers } from 'redux';
import { tweets } from './tweets'
import { common } from './common'
import { user } from './user'

export default combineReducers({tweets, common, user})