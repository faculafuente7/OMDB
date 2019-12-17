import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import moviesReducer from './reducers/movies-reducer'

const middleware = [thunk, logger]

const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
