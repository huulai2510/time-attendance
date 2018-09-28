import React, { Component } from 'react'

class TableDrivers extends Component {

    render() {
        let { timesheetRecord, searchTerm, columnTheads } = this.props
        return (
            <div className='mt-2 w-100'>
                <table className="table text-center">
                    <thead>
                        <tr>
                            {this.showThead(columnTheads)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.showRecords(this.filterTable(timesheetRecord, searchTerm),columnTheads)}
                    </tbody>
                </table>
            </div>
        )
    }

    showThead = columnTheads => {
        let result =null
        if(columnTheads.length > 0){
            result = columnTheads.filter(columnThead =>columnThead.status).map((columnThead, index) => {               
                    return(
                        <th key={index}>{columnThead.name}</th>
                    )
            })
        }
        return result
    }

    showRecords = (records, columnTheads) => {
        let result = null
        if (records.length > 0) {
            result = records.map((record, index) => {
                return (
                    <tr key={index}>
                        {columnTheads[0].status? <td>{record.name}</td>: <React.Fragment></React.Fragment>}
                        {columnTheads[1].status? <td>{record.employeeID}</td>: <React.Fragment></React.Fragment>}
                        {columnTheads[2].status? <td>{record.status ? 'active' : 'not active'}</td>: <React.Fragment></React.Fragment>}
                        {columnTheads[3].status? <td>{record.jobClass}</td>: <React.Fragment></React.Fragment>}
                        {columnTheads[4].status? <td>{record.birthday}</td>: <React.Fragment></React.Fragment>}
                        {columnTheads[5].status? <td>{record.initial}</td>: <React.Fragment></React.Fragment>}
                    </tr>
                )
            })
        }
        return result
    }

    filterTable = (timesheetRecord, searchTerm) => {
        let result = null
        
        result = timesheetRecord.filter(record => {
            return  record.name.toLowerCase().indexOf(searchTerm.name.toLowerCase()) !== -1 
                    && record.employeeID.indexOf(searchTerm.employeeID) !== -1 
                    && record.jobClass.toLowerCase().indexOf(searchTerm.jobClass.toLowerCase()) !== -1
                    && record.birthday.indexOf(searchTerm.birthday) !== -1
                    && record.initial.toLowerCase().indexOf(searchTerm.initial.toLowerCase()) !== -1
                    && searchTerm.status === null ? true : searchTerm.status === true ? record.status === true : record.status === false
                    
        })
        return result
    }

}

export default TableDrivers