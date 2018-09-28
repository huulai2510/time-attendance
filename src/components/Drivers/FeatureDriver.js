import React, { Component } from 'react'

class FeatureDriver extends Component {
    render() {
        let { columnTableReducer } = this.props
        return (
            <div className='w-100 mt-2 pr-0'>
                <button type="button" className="btn btn-primary mr-3">Add</button>
                <button type="button" className="btn btn-primary mr-3">Deactive</button>
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-primary float-right mr-3 dropdown-toggle" data-toggle="dropdown">
                        Column
                    </button>
                    <div className="dropdown-menu">
                        {this.showColumn(columnTableReducer)}
                    </div>
                </div>
                <button type="button" className="btn btn-primary mr-3 float-right">Download</button>
            </div>
        )
    }

    showColumn = columns => {
        let result = null
        if (columns.length > 0) {
            result = columns.map((column, index) => {
                return (
                    <span className="dropdown-item btn" key={index} onClick={() => this.props.onChangeColumn(column.name)} ><i className={column.status ? 'far fa-check-square' : 'far fa-square'}></i> {column.name}</span>
                )
            })
        }
        return result
    }

}

export default FeatureDriver