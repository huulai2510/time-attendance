import * as types from '../constants/actionType'

const initialState = {
    statusDriverInformation: true,
    statusPersonInformaion: false,
    statusQualifications: false
}

const cardStackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_STATUS_CARDSTACK:
            if (action.status === 'Qualifications') {
                state = {
                    statusDriverInformation: false,
                    statusPersonInformaion: false,
                    statusQualifications: true
                }
            } else if (action.status === 'PersonInformation') {
                state = {
                    statusDriverInformation: false,
                    statusPersonInformaion: true,
                    statusQualifications: false
                }
            } else {
                state = {
                    statusDriverInformation: true,
                    statusPersonInformaion: false,
                    statusQualifications: false
                }
            }
            return { ...state }
        default:
            return state
    }
}

export default cardStackReducer