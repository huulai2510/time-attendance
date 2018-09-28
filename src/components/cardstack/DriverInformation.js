import React, { Component } from 'react'
import BasicInformation from '../DriverInformation/BasicInformation';
import JobInformaion from '../DriverInformation/JobInformaion';
import LicenseInformation from '../DriverInformation/LicenseInformation';
import '../../App.css'

class DriverInformation extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white" onClick={() => !this.props.status ? this.props.changeStatus('DriverInformation') : ``}>
                    Driver Information
                </div>
                {this.props.status ?
                    <div className="card-body">
                        <button type="button" className="btn btn-primary float-right">Save</button>
                        <button type="button" className="btn btn-outline-primary mr-2 float-right">Cancel</button>
                        <h3 className="card-title">Driver Information<i className="far fa-question-circle btn btn-lg"></i></h3>
                        <BasicInformation />
                        <JobInformaion />
                        <LicenseInformation />
                    </div>
                    : <React.Fragment></React.Fragment>}
            </div>
        )
    }
}

export default DriverInformation