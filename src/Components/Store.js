import {rootReducers} from './Reducers/index'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export const Store = createStore(rootReducers,applyMiddleware(thunk))