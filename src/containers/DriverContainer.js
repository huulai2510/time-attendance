import React, { Component } from 'react'
import ColumnTag from '../components/Drivers/ColumnTag'
import TableDrivers from '../components/Drivers/TableDrivers'
import { connect } from 'react-redux'
import { actDeleteColumnTag, actAddColumnTag, actSearch, actChangeColumn } from '../actions/index'
import FeatureDriver from '../components/Drivers/FeatureDriver';

class DriverContainer extends Component {
    render() {
        let { columnTableReducer, searchTermReducer, timesheetRecordReducer, columnFilterReducer, columnTagReducer } = this.props.state
        let { onDeleteColumnTag, onAddColumnTag, onSearch, onChangeColumn } = this.props
        return (
            <div className='col-6'>
                <h1>Drivers</h1>
                <ColumnTag
                    columnTagReducer={columnTagReducer}
                    onDeleteColumnTag={onDeleteColumnTag}
                    columnFilter={columnFilterReducer}
                    onAddColumnTag={onAddColumnTag}
                    onSearch={onSearch} />
                <FeatureDriver columnTableReducer={columnTableReducer} onChangeColumn={onChangeColumn} />
                <TableDrivers timesheetRecord={timesheetRecordReducer} searchTerm={searchTermReducer} />
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
        onDeleteColumnTag: name => {
            dispatch(actDeleteColumnTag(name))
        },
        onAddColumnTag: name => {
            dispatch(actAddColumnTag(name))
        },
        onSearch: search => {
            dispatch(actSearch(search))
        },
        onChangeColumn: name => {
            dispatch(actChangeColumn(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverContainer)