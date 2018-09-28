import React, { Component } from 'react'

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
                        <div className='row'>
                            <i className="fas fa-user-circle display-1 ml-3 col-2"></i>
                            <div className="col-9 row">
                                <div className="form-group col-4">
                                    <label>First Name <i className="fas fa-star"></i></label>
                                    <div className='input-group'>
                                        <input type="text" className="form-control" name=''/>
                                    </div>
                                </div>
                                <div className="form-group col-4">
                                    <label>Last Name <i className="fas fa-star"></i></label>
                                    <div className='input-group'>
                                        <input type="text" className="form-control" name=''/>
                                    </div>
                                </div>
                                <div className="form-group col-2">
                                    <label>Initial <i className="fas fa-star"></i></label>
                                    <div className='input-group'>
                                        <input type="text" className="form-control" name=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <React.Fragment></React.Fragment>}
            </div>
        )
    }
}

export default DriverInformation