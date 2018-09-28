import React, { Component } from 'react'

class RecordDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dnone: true
        }
    }

    render() {
        return (
            <div className='col-6'>
                <h3>Record Details</h3>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>Date</th>
                            <th>Login</th>
                            <th>Logout</th>
                            <th>Billing Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showRecordDetail(this.props.recordDetail, this.props.nameRecord)}
                    </tbody>
                </table>
            </div>
        )
    }

    showRecordDetail = (details, name) => {
        let detail = null
        for (let i = 0; i < details.length; i++) {
            if (details[i].name === name) {
                detail = details[i]
                break
            }
        }
        let result = null
        if (detail) {
            result = detail.recordDetail.map((record, index) => {
                return (
                    <React.Fragment key={index}>
                        <tr key={index} onClick={this.toggleRecord}>
                            <td>{Array.isArray(record.login) ? (<i className="fas fa-plus"></i>) : ''} {detail.name}</td>
                            <td>{record.employeeID}</td>
                            <td>{record.date}</td>
                            <td>{Array.isArray(record.login) ? record.login[0] : record.login}</td>
                            <td>{Array.isArray(record.logout) ? record.logout[record.logout.length - 1] : record.logout}</td>
                            <td>{record.billingType}</td>
                        </tr>
                        {Array.isArray(record.login) && this.state.dnone ? record.login.map((log, index) => {
                            return (<tr key={index} hidden={false} >
                                <td><i className="fas fa-arrow-right"></i> {detail.name}</td>
                                <td>{record.employeeID}</td>
                                <td>{record.date}</td>
                                <td>{log}</td>
                                <td>{record.logout[index]}</td>
                                <td>{record.billingType}</td>
                            </tr>)
                        }) : (<React.Fragment></React.Fragment>)
                        }
                    </React.Fragment>
                )
            })
        }
        return result
    }

    toggleRecord = () => {
        this.setState({
            dnone: !this.state.dnone
        })
    }

}

export default RecordDetails