import React, { Component } from 'react'
import ColumnTag from '../components/Drivers/ColumnTag'
import TableDrivers from '../components/Drivers/TableDrivers'
import { connect } from 'react-redux'
import { actDeleteColumnTag, actAddColumnTag, actSearch, actChangeColumn } from '../actions/index'
import FeatureDriver from '../components/Drivers/FeatureDriver'
import HeadingDrivers from '../components/Drivers/HeadingDrivers'

class DriverContainer extends Component {

    constructor() {
        super()
        this.state = {
            size: "minimize"
        }
    }

    render() {
        let { columnTableReducer, searchTermReducer, timesheetRecordReducer, columnFilterReducer, columnTagReducer } = this.props.state
        let { onDeleteColumnTag, onAddColumnTag, onSearch, onChangeColumn } = this.props
        return (
            <React.Fragment>
                <div className={this.state.size === "minimize" ? 'col-6' : 'col-10 position-absolute z-index-100 bg-light h100'}>
                    <HeadingDrivers changeSize={this.changeSize} />
                    <ColumnTag
                        columnTagReducer={columnTagReducer}
                        onDeleteColumnTag={onDeleteColumnTag}
                        columnFilter={columnFilterReducer}
                        onAddColumnTag={onAddColumnTag}
                        onSearch={onSearch} />
                    <FeatureDriver columnTableReducer={columnTableReducer} onChangeColumn={onChangeColumn} />
                    <TableDrivers timesheetRecord={timesheetRecordReducer} searchTerm={searchTermReducer} columnTheads={columnTableReducer} />
                </div>
                {this.state.size === "minimize"? <React.Fragment></React.Fragment> : <div className='col'></div>}
            </React.Fragment>
        )
    }

    changeSize = () => {
        this.setState({
            size: this.state.size === 'minimize'? 'maximize' : 'minimize'
        })
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