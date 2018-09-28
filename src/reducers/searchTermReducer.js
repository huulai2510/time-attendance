import * as types from '../constants/actionType'

const initialState = {
    name: '',
    employeeID: '',
    jobClass: ''
}

const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            state = action.search
            return { ...state }
        default:
            return state
    }
}

export default searchTermReducer