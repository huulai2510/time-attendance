import React, { Component } from 'react'
import DriverInformation from '../components/cardstack/DriverInformation'
import PersonInformation from '../components/cardstack/PersonInformation'
import Qualifications from '../components/cardstack/Qualifications'
import { connect } from 'react-redux'
import { actChangeStatus } from '../actions/index'

class CardStackContainer extends Component {
    render() {
        let { cardStackReducer } = this.props.state
        let { onChangeStatus } = this.props
        return (
            <div className='col-6'>
                <DriverInformation status={cardStackReducer.statusDriverInformation} changeStatus={onChangeStatus} />
                <PersonInformation status={cardStackReducer.statusPersonInformaion} changeStatus={onChangeStatus} />
                <Qualifications status={cardStackReducer.statusQualifications} changeStatus={onChangeStatus} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: status => {
            dispatch(actChangeStatus(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardStackContainer)