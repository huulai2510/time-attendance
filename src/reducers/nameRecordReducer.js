import * as types from '../constants/actionType'

const initialState = 'Ricky'

const nameRecordReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_DETAILS:
            state = action.name
            return state
        default:
            return state
    }
}

export default nameRecordReducer