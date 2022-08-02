import { combineReducers } from "redux"
import countReducer from "./reducers/countReducer";
import userReducer from "./reducers/userReducer";
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'


const reducer = combineReducers({
    count: countReducer,
    userName: userReducer
})

const persistConfig = {
    key: "root",
    storage,
    whitelist:["count","userName"],
    blacklist:[]
}

const persistedReducer=persistReducer(persistConfig,reducer)


export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
export const persistor=persistStore(store)


export default reducer;
