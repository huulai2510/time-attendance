import { combineReducers } from 'redux'
import timesheetRecordReducer from './timesheetRecordReducer'
import recordDetailReducer from './recordDetailReducer'
import nameRecordReducer from './nameRecordReducer'
import cardStackReducer from './cardStackReducer'
import columnFilterReducer from './columnFilterReducer'
import searchTermReducer from './searchTermReducer'
import columnTableReducer from './columnTableReducer'

const rootReducer = combineReducers({
    timesheetRecordReducer,
    recordDetailReducer,
    nameRecordReducer,
    cardStackReducer,
    columnFilterReducer,
    searchTermReducer,
    columnTableReducer
})

export default rootReducer