import * as types from '../constants/actionType'

const initialState = [
    {
        name: 'name',
        status: true
    },
    {
        name: 'employeeID',
        status: true
    },
    {
        name: 'status',
        status: true
    },
    {
        name: 'jobClass',
        status: true
    },
    {
        name: 'birthday',
        status: true
    },
    {
        name: 'initial',
        status: false
    }
]

const columnFilterReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.DELETE_COLUMN_TAG:
            index = findIndex(state, action.name)
            state[index].status = false
            return [...state]
        case types.ADD_COLUMN_TAG:
            index = findIndex(state, action.name)
            state[index].status = true
            return [...state]
        default:
            return state
    }
}

const findIndex = (state, name) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if (state[i].name === name) {
            index = i
            break
        }
    }
    return index
}

export default columnFilterReducer