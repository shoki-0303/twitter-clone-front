import { combineReducers } from 'redux';
import { tweets } from './tweets'
import { common } from './common'

export default combineReducers({tweets, common})