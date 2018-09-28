import React, { Component } from 'react'

class TimesheetRecords extends Component {
    render() {
        return (
            <div className='col-6'>
                <h3>Timesheet Records</h3>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>Status</th>
                            <th>Job Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showRecords(this.props.timesheetRecords)}
                    </tbody>
                </table>
            </div>
        )
    }

    showRecords = records => {
        let result = null
        if (records.length > 0) {
            result = records.map((record, index) => {
                return (
                    <tr key={index} onClick={() => this.props.onName(record.name)}>
                        <td>{record.name}</td>
                        <td>{record.employeeID}</td>
                        <td>{record.status ? 'active' : 'not active'}</td>
                        <td>{record.jobClass}</td>
                    </tr>
                )
            })
        }
        return result
    }
}

export default TimesheetRecords