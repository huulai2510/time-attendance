import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import '../../App.css'

import 'react-datepicker/dist/react-datepicker.css'

class BasicInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            pictures: 'http://www.keircom.com/images/menu/office-erp-login.jpg'
        }
    }

    handleChange = date => {
        this.setState({
            startDate: date
        })
    }

    fileChangedHandler = (e) => {
        this.setState({
            pictures: URL.createObjectURL(e.target.files[0])
        }, () => console.log(this.state.pictures))
    }

    render() {
        return (
            <div className='row'>
                <div className='col-3 row'>
                    <div className='col-12 divimg'>
                        <img src={this.state.pictures} alt="..." height={'100%'} width={'100%'} />
                    </div>
                    <div className="form-group position-relative w-100 mt-1">
                        <input type="file" className="form-control-file" name="" id='upload-photo' onChange={this.fileChangedHandler} />
                        <label className='btn btn-success w-100 labelform'><i className="fas fa-camera"></i> Upload</label>
                    </div>
                </div>
                <div className="col-8 row">
                    <div className="form-group col-5">
                        <label className='labelform'>First Name</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='' placeholder='Enter first name' required />
                        </div>
                    </div>
                    <div className="form-group col-4">
                        <label className='labelform'>Last Name</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='' placeholder='Enter last name' required />
                        </div>
                    </div>
                    <div className="form-group col-3">
                        <label className='labelform'>Initial</label>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='' placeholder='Enter initial' required />
                        </div>
                    </div>
                    <div className='form-group col-4'>
                        <label className='labelform'>Birthday</label>
                        <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDate} onChange={this.handleChange} placeholderText="Select a date" className="form-control form-control-sm" required />
                    </div>
                    <div className='col-1'></div>
                    <div className="form-group col-7 row p-0">
                        <label className='col pl-0 labelform'>EmployeeID</label>
                        <div className="form-check col p-0">
                            <label className="form-check-label float-right labelform">
                                <input type="checkbox" className="form-check-input" name="" id="" />
                                Temporary
                            </label>
                        </div>
                        <div className='input-group'>
                            <input type="text" className="form-control form-control-sm" name='' placeholder='Enter EmployeeID' required />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label className='labelform'>Password</label>
                        <div className='input-group'>
                            <input type="password" className="form-control form-control-sm" name='' placeholder='Enter password' required />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label className='labelform'>Comfirm Password</label>
                        <div className='input-group'>
                            <input type="password" className="form-control form-control-sm" name='' placeholder='Enter comfirm password' required />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInformation