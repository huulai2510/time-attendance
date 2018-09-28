import React, { Component } from 'react'
import TimesheetRecords from '../components/timesheetRecords/TimesheetRecords'
import RecordDetails from '../components/timesheetRecords/RecordDetails'
import { connect } from 'react-redux'
import { actChangeNameRecord } from '../actions/index'

class TimesheetRecord extends Component {
    render() {
        return (
            <div className='row'>
                <TimesheetRecords timesheetRecords={this.props.timesheetRecords} onName={this.props.onName} />
                <RecordDetails recordDetail={this.props.recordDetail} nameRecord={this.props.nameRecord} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        timesheetRecords: state.timesheetRecordReducer,
        recordDetail: state.recordDetailReducer,
        nameRecord: state.nameRecordReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onName: name => {
            dispatch(actChangeNameRecord(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetRecord)