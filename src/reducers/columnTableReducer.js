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
        status: false
    },
    {
        name: 'initial',
        status: false
    },
    {
        name: 'temporary',
        status: false
    }
]

const columnTableReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.CHANGE_COLUMN:
            index = findIndex(state, action.name)
            state[index].status = !state[index].status
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

export default columnTableReducer