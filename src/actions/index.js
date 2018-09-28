import * as types from '../constants/actionType'

export const actChangeNameRecord = name => {
    return {
        type: types.CHANGE_DETAILS,
        name
    }
}

export const actChangeStatus = status => {
    return {
        type: types.CHANGE_STATUS_CARDSTACK,
        status
    }
}

export const actDeleteColumnTag = name => {
    return {
        type: types.DELETE_COLUMN_TAG,
        name
    }
}

export const actAddColumnTag = name => {
    return {
        type: types.ADD_COLUMN_TAG,
        name
    }
}

export const actSearch = search => {
    return {
        type: types.SEARCH,
        search
    }
}

export const actChangeColumn = name => {
    return {
        type: types.CHANGE_COLUMN,
        name
    }
}