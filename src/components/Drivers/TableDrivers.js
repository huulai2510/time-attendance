import React, { Component } from 'react'

class TableDrivers extends Component {

    render() {
        let { timesheetRecord, searchTerm } = this.props
        return (
            <div className='mt-2 w-100'>
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
                        {this.showRecords(this.filterTable(timesheetRecord, searchTerm))}
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
                    <tr key={index}>
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

    filterTable = (timesheetRecord, searchTerm) => {
        let result = null
        result = timesheetRecord.filter(record => {
            return record.name.toLowerCase().indexOf(searchTerm.name.toLowerCase()) !== -1 && record.employeeID.toLowerCase().indexOf(searchTerm.employeeID.toLowerCase()) !== -1 && record.jobClass.toLowerCase().indexOf(searchTerm.jobClass.toLowerCase()) !== -1
        })
        return result
    }

}

export default TableDrivers